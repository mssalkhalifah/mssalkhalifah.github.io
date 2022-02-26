import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Stairs = ({
  props,
  routePath,
}: {
  props: JSX.IntrinsicElements['group']
  routePath: string
}) => {
  const group = useRef<THREE.Group>()
  const [models, setmodels] = useState<THREE.Object3D[] | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('staris.glb', async (glb) => {
      const nodes = await glb.parser.getDependencies('node')
      setmodels(nodes)
    })
  })

  useFrame((state, delta) => {
    const stairs = group.current
    if (stairs) {
      if (routePath.indexOf('projects') >= 0) {
        stairs.position.lerp(new Vector3(-1, -11, -6), 0.01)
      } else {
        stairs.position.lerp(new Vector3(4, -6, -4), 0.01)
      }
    }
  })

  return (
    <>
      {models ? (
        <group ref={group} {...props}>
          {models.map((model) =>
            model.name != 'stair_room_glass' ? (
              <primitive ref={group} name={model.name} object={model} />
            ) : (
              <></>
            )
          )}
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  )
}

export default Stairs
