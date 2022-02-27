import { useHelper } from '@react-three/drei'
import { useRef, useState } from 'react'
import {
  DirectionalLightHelper,
  PointLightHelper,
  PointLightShadow,
  SpotLightHelper,
} from 'three'

const Lights = () => {
  const directionalLight = useRef()
  useHelper(directionalLight, DirectionalLightHelper, 1, 'red')
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        ref={directionalLight}
        position={[-1, 1, 1]}
        castShadow
        intensity={1.2}
      />
    </>
  )
}

export default Lights
