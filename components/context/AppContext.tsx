import { createContext } from "react"

interface IAppContext {
  currentPage: string
}

const defaultValues = {
  currentPage: 'home'
}

const AppContext = createContext<IAppContext>(defaultValues)

export default AppContext
