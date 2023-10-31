import './App.css'
import { AddProgramForm } from './Components/AddProgramForm/AddProgramForm'
import Header from './Components/Header/Header'
import ListPrograms from './Components/ListPrograms/ListPrograms'
import { AddProgramProvider } from './Context/ProgramContext'

function App() {
  return (
    <>
      <AddProgramProvider>
        <Header />
        <AddProgramForm />
        <ListPrograms />
      </AddProgramProvider>
    </>
  )
}

export default App
