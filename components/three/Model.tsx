import { Html, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh, PointLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
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
  const projectGroup = useRef<THREE.Group>()
  const [mainModel, setMainModel] = useState<THREE.Object3D[] | null>(null)
  const [projectModel, setprojectModel] = useState<THREE.Object3D[] | null>(
    null
  )

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('office6.glb', async (glb) => {
      const nodes = await glb.parser.getDependencies('node')
      //const materials = await glb.parser.getDependencies('material')
      //const animations = await glb.parser.getDependencies('animation')
      console.log('Nodes: ', nodes)
      console.log(nodes.find((node) => node.name == 'Project_room'))

      nodes.forEach((node) => {
        if (
          node.name == 'marble_room_wall' ||
          node.name == 'marble_room_floor'
        ) {
          node.receiveShadow = true
        } else {
          node.castShadow = true
        }
      })

      nodes
        .find((node) => node.name == 'Project_room')
        .children.forEach((child: Mesh) => {
          if (
            child.name == 'Project_room003' ||
            child.name == 'Project_room003_4'
          ) {
            child.receiveShadow = true
          } else {
            child.castShadow = true
          }
        })

      setMainModel(nodes)
    })
  }, [])

  useFrame((state, delta) => {
    const mainModel = group.current
    if (mainModel) {
    }
  })

  return (
    <>
      {mainModel ? (
        <>
          <group ref={group} {...props}>
            {mainModel.map((model) => (
              <primitive ref={group} name={model.name} object={model} />
            ))}
            <pointLight
              ref={light}
              position={[1, 4, -1]}
              power={5}
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
                power: 20,
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
                power: 20,
              }}
            />
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  )
}

export default Model
