import { Html, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import {
  AnimationClip,
  AnimationMixer,
  LoopOnce,
  PointLightHelper,
  Vector3,
} from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Office = ({
  props,
  routePath,
}: {
  props: JSX.IntrinsicElements['group']
  routePath: string
}) => {
  const group = useRef<THREE.Group>()
  const rectAreaLightRef = useRef()
  const pointLightref = useRef()
  const [models, setmodels] = useState<THREE.Object3D[] | null>(null)
  const [animation, setAnimations] = useState<AnimationClip[] | null>(null)
  const [mixer, setMixer] = useState<AnimationMixer[] | null>(null)
  const [played, setPlayed] = useState(false)
  useHelper(rectAreaLightRef, RectAreaLightHelper, 'red')
  useHelper(pointLightref, PointLightHelper, 1, 'red')

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('office5.glb', async (glb) => {
      const nodes = await glb.parser.getDependencies('node')
      const animation = await glb.parser.getDependencies('animation')
      nodes.forEach((node) => {
        if (node.name.indexOf('marble_room_wall') >= 0) {
          node.castShadow = false
          node.receiveShadow = true
        } else {
          node.castShadow = true
          node.receiveShadow = false
        }
      })

      setmodels(nodes)
      setAnimations(animation)
      setMixer(
        nodes
          .filter((node) => node.name.indexOf('stair_room') >= 0)
          .map((node) => new AnimationMixer(node))
      )
    })
  }, [])

  useEffect(() => {
    console.log('play animation')
    if (animation && typeof group.current != 'undefined') {
      if (animation && mixer) {
        if (!played && routePath.indexOf('projects') >= 0) {
          for (let i = 0; i < animation.length; i++) {
            const animate = mixer[i].clipAction(animation[i])
            animate.reset()
            animate.timeScale = 3
            animate.setLoop(LoopOnce, 1)
            animate.clampWhenFinished = true
            animate.play()
          }
          setPlayed(true)
        } else if (played && routePath == '/') {
          for (let i = 0; i < animation.length; i++) {
            const animate = mixer[i].clipAction(animation[i])
            animate.paused = false
            animate.timeScale = -3
            animate.setLoop(LoopOnce, 1)
            animate.play()
          }
          setPlayed(false)
        }
      }
    }
  })

  /* Play animations */
  useFrame((_, delta) => {
    if (mixer) mixer.forEach((mixer) => mixer.update(delta))
    if (routePath.indexOf('projects') >= 0) {
    }
  })

  useFrame((state, delta) => {
    let office = group.current
    if (office) {
      if (routePath.indexOf('projects') >= 0) {
        office.position.lerp(new Vector3(0, -9, -5), 0.08)
      } else {
        office.position.lerp(new Vector3(4, -6, -4), 0.08)
      }
    }
  })

  return (
    <>
      {models ? (
        <>
          <group ref={group} {...props}>
            <rectAreaLight
              position={[0, 3.9, -1.8]}
              rotation={[-90, 0, 0]}
              width={3}
              height={0.1}
              intensity={1}
              ref={rectAreaLightRef}
              color="white"
              power={30}
            />
            {models.map((model) => (
              <primitive ref={group} name={model.name} object={model} />
            ))}
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  )
}

export default Office
