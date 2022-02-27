import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

const MyRectangleLight = ({
  helper,
  helperColor,
  props,
}: {
  helper?: boolean
  helperColor?: string
  props?: JSX.IntrinsicElements['rectAreaLight']
}) => {
  const light = useRef()
  if (helper) useHelper(light, RectAreaLightHelper, helperColor)

  return <rectAreaLight ref={light} {...props} />
}

export default MyRectangleLight
