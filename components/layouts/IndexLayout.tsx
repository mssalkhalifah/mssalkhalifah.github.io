import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowResize'
import Navbar from '../Navbar'
import Social from '../Social'
import MyCanvas from '../three/MyCanvas'

interface CanvasStyle {
  viewHeight: number
  marginTop: number
}

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const [canvasStyle] = useState<CanvasStyle>({
    viewHeight: 90,
    marginTop: 65,
  })
  const router = useRouter()
  const windowSize = useWindowSize()

  useEffect(() => {
    if (window.innerWidth >= 1280 || windowSize[0] >= 1280) {
      canvasStyle.viewHeight = 90
      canvasStyle.marginTop = 65
    } else {
      canvasStyle.viewHeight = 30
      canvasStyle.marginTop = 55
    }
    console.log(windowSize)
  })

  return (
    <div className='min-h-screen bg-lightShades'>
      <Navbar />
      <div className='flex h-screen flex-col items-center overflow-y-auto overflow-x-hidden xl:flex-row xl:items-baseline'>
        <div className='w-full after:z-20 after:flex after:h-10 after:w-full after:bg-lightShades after:blur-lg xl:w-[55%] after:xl:hidden'>
          <div className='absolute left-0 z-10 hidden h-full w-10 transform bg-lightShades xl:block'></div>
          <Canvas
            camera={{ fov: 25 }}
            shadows
            style={{
              height: `${canvasStyle.viewHeight}vh`,
              width: '100%',
              marginTop: `${canvasStyle.marginTop}px`,
            }}
          >
            <MyCanvas routerPath={router.pathname} />
          </Canvas>
        </div>
        <main className='flex h-[90%] w-full flex-col items-center self-center px-[5%] xl:w-7/12 xl:overflow-y-auto'>
          {children}
          <Social />
        </main>
      </div>
    </div>
  )
}

export default IndexLayout
