import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Card from '../Card'
import Navbar from '../Navbar'

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <div className=" min-h-screen bg-lightShades">
      <Navbar />
      <div className=" mx-2 mt-28 flex flex-col items-center justify-center sm:flex-row">
        <Card
          image={'/firefox_Dxp4vNtLPT.png'}
          description="lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf"
          className=" mb-4 sm:mb-0 sm:mr-14"
          title=" template title"
        />
        <Card
          image={'/firefox_Dxp4vNtLPT.png'}
          description="lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf"
          title=" template title"
        />
      </div>
      <main className=" flex flex-col items-center">{children}</main>
    </div>
  )
}

export default IndexLayout
