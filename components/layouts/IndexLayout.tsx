import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import Navbar from '../Navbar'
import Social from '../Social'
import MyCanvas from '../three/MyCanvas'

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-lightShades'>
      <Navbar />
      <div className='absolute top-0 z-10 h-20 w-full transform bg-lightShades'></div>
      <div className='absolute right-0 z-10 h-full w-10 transform bg-lightShades'></div>
      <div className='absolute bottom-0 z-10 h-10 w-full transform bg-lightShades'></div>
      <div className='flex '>
        <Canvas
          camera={{ fov: 25 }}
          shadows
          style={{
            width: '55%',
            height: '100%',
            background: '',
            display: 'block',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <MyCanvas routerPath={router.pathname} />
        </Canvas>
      </div>
      <div className='mt-5 flex w-[45%] flex-col'>
        <main className='mx-4 flex max-h-[1100px] flex-col items-center overflow-y-auto'>
          {children}
        </main>
        <Social />
      </div>
    </div>
  )
}

export default IndexLayout
