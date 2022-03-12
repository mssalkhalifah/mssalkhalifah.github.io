import Image from 'next/image'
import { useState } from 'react'

const CloudiImage = ({
  src,
  width,
  height,
  alt,
}: {
  src?: string
  width: number
  height: number
  alt?: string
}) => {
  const [imageSource] = useState({
    image: src ? src : 'protfolio/placeholder_1280_720_idtgoz.jpg',
    blurredImage:
      `https://res.cloudinary.com/domq50ciy/c_scale,q_10,w_${width}/` + src,
  })

  return (
    <Image
      src={imageSource.image}
      width={width}
      height={height}
      placeholder='blur'
      alt={alt}
      blurDataURL={imageSource.blurredImage}
    />
  )
}

export default CloudiImage
