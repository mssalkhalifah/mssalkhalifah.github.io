import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Dungeon = () => {
  const [models, setModels] = useState<THREE.Object3D[]>()
  const entrance = useRef<THREE.Group>()

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('Dungeon.glb', async (glb) => {
      const nodes = await glb.parser.getDependencies('node')
      setModels(nodes)
    })
  })

  useFrame((state, delta) => {
    if (entrance.current) {
      if (entrance.current.position.y >= -5) {
        //entrance.current.position.y -= 1 * delta
      }
    }
  })

  return (
    <>
      {models ? (
        <group ref={entrance} position={[0, -2.5, 0]} dispose={null}>
          <primitive ref={entrance} name={'Entrance'} object={models[0]} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  )
}

export default Dungeon
