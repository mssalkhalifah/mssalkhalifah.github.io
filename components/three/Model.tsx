import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ({
  routePath,
  props,
}: {
  routePath?: string
  props?: JSX.IntrinsicElements['group']
}) => {
  const group = useRef<THREE.Group>()
  const [mainModel, setMainModel] = useState<THREE.Object3D[] | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('office6.glb', async (glb) => {
      const nodes = (await glb.parser.getDependencies(
        'node'
      )) as THREE.Object3D[]
      //const materials = await glb.parser.getDependencies('material')
      //const animations = await glb.parser.getDependencies('animation')

      setMainModel(nodes)
    })
  })

  useFrame((state, delta) => {
    const mainModel = group.current
    if (mainModel) {
      //mainModel.position.set(0, -2, 0)
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
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  )
}

export default Model
