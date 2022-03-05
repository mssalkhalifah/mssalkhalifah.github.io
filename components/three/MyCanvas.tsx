import { useThree, useFrame } from '@react-three/fiber'
import * as TWEEN from '@tweenjs/tween.js'
import { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import Lights from './Lights'
import Model from './Model'

interface CameraMovement {
  position: Vector3
  lookAt: Vector3
}

const MyCanvas = ({ routerPath }: { routerPath: string }) => {
  const { camera } = useThree()
  const [currentPosition] = useState<CameraMovement>({
    position: new Vector3(-10, 10, 10),
    lookAt: new Vector3(0, 0, 0),
  })

  camera.near = 1
  camera.far = 1000

  const defaultPosition = {
    position: new Vector3(-10, 10, 10),
    lookAt: new Vector3(0, 0, 0),
  }
  const projectPagePosition = {
    position: new Vector3(-4, 16, 16),
    lookAt: new Vector3(5, 0, 0),
  }
  useEffect(() => {
    let nextPosition: CameraMovement
    switch (routerPath.trim().split('/')[1]) {
      case 'projects':
        nextPosition = projectPagePosition
        break
      default:
        nextPosition = defaultPosition
        break
    }
    new TWEEN.Tween(currentPosition)
      .to(nextPosition, 800)
      .onUpdate((position) => {
        currentPosition.position = position.position
        currentPosition.lookAt = position.lookAt
        camera.position.set(
          currentPosition.position.x,
          currentPosition.position.y,
          currentPosition.position.z
        )
        camera.lookAt(currentPosition.lookAt)
      })
      .start()
  }, [routerPath])

  useFrame(() => {
    TWEEN.update()
  })

  return (
    <>
      <Lights />
      <Model routePath={routerPath} props={{ position: [0, -2, 0] }} />
    </>
  )
}

export default MyCanvas
