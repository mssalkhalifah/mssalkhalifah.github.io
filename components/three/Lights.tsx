import { useRef } from 'react'

const Lights = () => {
  const directionalLight = useRef()
  //useHelper(directionalLight, DirectionalLightHelper, 1, 'red')
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLight}
        position={[-1, 1, 1]}
        castShadow
        intensity={0}
      />
    </>
  )
}

export default Lights
