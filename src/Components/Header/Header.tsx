import { useContext } from "react";
import { AddProgramContext } from "../../Context/ProgramContext";

export default function Header() {

  const { openModal, setOpenModal } = useContext(AddProgramContext);

  return (
    <header className="py-6 flex container mx-auto w-6/12 justify-between align-middle items-center mb-3">
      <h1 className="text-center text-2xl">O que vamos assistr?</h1>

      <button
        className="bg-teal-500 p-3 text-white uppercase font-bold text-sm hover:bg-teal-800 border-0 rounded transition-colors"
        onClick={() => setOpenModal(!openModal)}>Adicionar Programa</button>
    </header>
  )
}