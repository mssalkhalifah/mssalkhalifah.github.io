import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import THREE, { AnimationMixer, LoopOnce, Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import MyRectangleLight from './MyRectangleLight'

const Model = ({
  routePath,
  props,
}: {
  routePath?: string
  props?: JSX.IntrinsicElements['group']
}) => {
  const light = useRef()
  //useHelper(light, PointLightHelper, 1, 'red')
  const group = useRef<THREE.Group>()
  const [loadProgress, setLoadProgress] = useState(0)
  const [mainModel, setMainModel] = useState<THREE.Object3D[] | null>(null)
  const [mixers, setMixers] = useState<THREE.AnimationMixer[] | null>(null)
  const [nodes, setNodes] = useState<Mesh[] | null>(null)
  const [playedAnimations] = useState<boolean[]>([false])
  const [animations, setAnimations] = useState<THREE.AnimationClip[] | null>(
    null
  )

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      'office_baked.glb',
      async (glb) => {
        const nodes = await glb.parser.getDependencies('node')
        const animations = await glb.parser.getDependencies('animation')
        console.log('Nodes: ', nodes)
        console.log('Animations: ', animations)
        console.log(nodes.find((node) => node.name == 'Project_room'))

        nodes.forEach((node) => {
          if (
            node.name == 'marble_room_wall' ||
            node.name == 'marble_room_floor'
          ) {
            //node.receiveShadow = true
          } else {
            //node.castShadow = true
          }
        })

        nodes
          .find((node) => node.name == 'Project_room')
          .children.forEach((child: Mesh) => {
            if (
              child.name == 'Project_room003' ||
              child.name == 'Project_room003_4'
            ) {
              //child.receiveShadow = true
            } else {
              //child.castShadow = true
            }
          })

        setNodes(nodes)
        setAnimations(animations)
        setMainModel(nodes)
      },
      (progress) => setLoadProgress((progress.loaded / 10896912) * 100)
    )
  }, [])

  useEffect(() => {
    if (animations && nodes) {
      switch (routePath?.trim().split('/')[1]) {
        case 'projects':
          if (!playedAnimations[0]) {
            const projectRoomAnimations = animations.filter((animation) =>
              animation.name.includes('Project')
            )
            const projectRoomMixer = nodes
              .filter((node) => node.name.includes('Project'))
              .map((node) => new AnimationMixer(node))

            setMixers(projectRoomMixer)
            projectRoomAnimations.forEach((animation, i = 0) => {
              const animate = projectRoomMixer[i].clipAction(animation)
              animate.setLoop(LoopOnce, 1)
              animate.clampWhenFinished = true
              animate.play()
            })
            playedAnimations[0] = true
          }
          break

        default:
          break
      }
    }
  }, [routePath])

  useFrame((_, delta) => {
    if (mixers) mixers.forEach((mixer) => mixer.update(delta))
  })

  return (
    <>
      {mainModel ? (
        <>
          <group ref={group} {...props}>
            {mainModel.map((model) => (
              <primitive
                key={model.name}
                ref={group}
                name={model.name}
                object={model}
              />
            ))}
            <pointLight
              ref={light}
              position={[1, 4, -1]}
              power={0}
              castShadow
            />
            <MyRectangleLight
              helperColor='red'
              props={{
                position: [0, 3.78, -1.85],
                height: 0.1,
                width: 3.8,
                rotation: [-Math.PI / 2, 0, 0],
                power: 20,
              }}
            />
            <MyRectangleLight
              helper
              helperColor='blue'
              props={{
                position: [5.65, 5.79, 0.6],
                height: 0.1,
                width: 4.3,
                rotation: [-Math.PI / 2, 0, Math.PI / 2],
                power: 0,
              }}
            />
            <MyRectangleLight
              helper
              helperColor='red'
              props={{
                position: [3.9, 5.78, -1.75],
                height: 0.1,
                width: 3.4,
                rotation: [-Math.PI / 2, 0, 0],
                power: 0,
              }}
            />
          </group>
        </>
      ) : (
        <Html>
          <div className='left-0 flex w-28 flex-col items-center justify-center'>
            <div className='h-2.5 w-full rounded-full bg-darkShades'>
              <div
                className='h-2.5 rounded-full bg-primary'
                style={{ width: `${loadProgress}%` }}
              ></div>
            </div>
          </div>
        </Html>
      )}
    </>
  )
}

export default Model
