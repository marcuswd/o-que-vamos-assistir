import { useContext } from "react";
import { AddProgramContext } from "../../Context/ProgramContext";

export default function Header() {

  const { openModal, setOpenModal } = useContext(AddProgramContext);

  return (
    <header className="xl:py-6 py-2 flex container mx-auto xl:w-6/12 w-11/12 justify-between align-middle items-center mb-3 font-bold">
      <h1 className="text-center xl:text-2xl text-slate-500">O que vamos assistir?</h1>

      <button
        className="bg-teal-500 p-3 text-white uppercase font-bold xl:text-sm text-xs hover:bg-teal-800 border-0 rounded transition-colors"
        onClick={() => setOpenModal(!openModal)}>Adicionar Programa</button>
    </header>
  )
}