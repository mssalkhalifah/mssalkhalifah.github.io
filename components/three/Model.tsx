import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import MyRectangleLight from './MyRectangleLight'

const Model = ({
  routePath,
  props,
}: {
  routePath?: string
  props?: JSX.IntrinsicElements['group']
}) => {
  const group = useRef<THREE.Group>()
  const projectGroup = useRef<THREE.Group>()
  const [mainModel, setMainModel] = useState<THREE.Object3D[] | null>(null)
  const [projectModel, setprojectModel] = useState<THREE.Object3D[] | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('office6.glb', async (glb) => {
      const nodes = (await glb.parser.getDependencies(
        'node'
      )) as THREE.Object3D[]
      //const materials = await glb.parser.getDependencies('material')
      //const animations = await glb.parser.getDependencies('animation')
      console.log('Nodes: ', nodes)
      console.log(nodes.find((node) => node.name == 'Project_room'))

      setMainModel(nodes)
    })
  }, [])

  useFrame((state, delta) => {
    const mainModel = group.current
    if (mainModel && routePath) {
      let currentPosition =
        routePath.indexOf('projects') >= 0 ? [-4, -2, 0] : [0, -2, 0]

      mainModel.position.lerp(
        new Vector3(currentPosition[0], currentPosition[1], currentPosition[2]),
        0.05
      )
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
            <MyRectangleLight
              helper
              helperColor='red'
              props={{
                position: [0, 3.78, -1.85],
                height: 0.1,
                width: 3.8,
                rotation: [-Math.PI / 2, 0, 0],
                power: 20
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
