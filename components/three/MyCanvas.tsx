import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import Lights from './Lights'
import Model from './Model'
import Office from './Office'
import Stairs from './Staris'

const MyCanvas = ({ routerPath }: { routerPath: string }) => {
  const { camera, gl } = useThree()

  camera.near = 1
  camera.far = 1000
  camera.position.set(-2, 2, 2)
  camera.rotation.order = 'YXZ'
  camera.rotation.y = -Math.PI / 4
  camera.rotation.x = Math.atan(-1 / Math.sqrt(2))

  const defaultPosition = new Vector3(
    camera.position.x,
    camera.position.y,
    camera.position.z
  )
  useFrame((state, delta) => {
    camera.position.lerp(defaultPosition, 0.05)
  })

  /*gl.shadowMap.enabled = true
  gl.shadowMap.type = PCFSoftShadowMap
  gl.physicallyCorrectLights = true
  gl.outputEncoding = sRGBEncoding
  gl.pixelRatio = window.devicePixelRatio*/
  return (
    <>
      <Lights />
      <OrbitControls />
      <Model routePath={routerPath} props={{ position: [0, -2, 0] }} />
    </>
  )
}

export default MyCanvas
