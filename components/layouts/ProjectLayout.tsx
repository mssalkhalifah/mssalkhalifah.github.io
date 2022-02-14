import { motion } from 'framer-motion'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import Card from '../Card'
import Header from '../Header'

type ProjectContextState = {
  isClicked: boolean
}

const projectDefaultContext = {
  state: { isClicked: false },
  setState: (state: ProjectContextState) => {},
}

export const ProjectContext = createContext(projectDefaultContext)

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(projectDefaultContext.state)
  return (
    <ProjectContext.Provider value={{ state, setState }}>
      <div className=" flex items-center justify-center">
        <div className=" mt-32 flex flex-col">
          <motion.div
            initial="pageInitial"
            animate="pageAnimation"
            variants={{
              pageInitial: { opacity: 0, y: -10 },
              pageAnimation: { opacity: 1, y: 0 },
            }}
            className=" self-center"
          >
            <Header className=" mb-5 text-3xl font-bold">Projects</Header>
          </motion.div>
          <motion.div
            initial="pageInitial"
            animate="pageAnimation"
            variants={{
              pageInitial: { opacity: 0, y: 60 },
              pageAnimation: { opacity: 1, y: 0 },
            }}
          >
            <div
              className={` ${
                state.isClicked ? 'hidden' : 'grid'
              } grid-rows-1 md:grid-cols-2`}
            >
              <Card link="/projects/1" />
              <Card link="/projects/2" />
              <Card link="/projects/3" />
              <Card link="/projects/4" />
            </div>
          </motion.div>
          <main>{children}</main>
        </div>
      </div>
    </ProjectContext.Provider>
  )
}

export default ProjectLayout
