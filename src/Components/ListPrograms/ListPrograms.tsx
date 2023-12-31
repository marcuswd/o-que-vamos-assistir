import "./styles.css";
import { useContext } from "react";
import { AddProgramContext } from "../../Context/ProgramContext";
import { formataData } from "../../helpers/FormataData";

export default function ListPrograms() {
  const { programs } = useContext(AddProgramContext);
  return (
    <>
      {programs.length ?
        <>
          <table className="xl:w-8/12 w-11/12 mx-auto mb-10 table-auto border-collapse rounded overflow-hidden xl:text-base text-xs">
            <thead>
              <tr className="bg-slate-500 text-white">
                <th className="text-left font-normal">Adicionado em</th>
                <th className="text-left font-normal">Nome do Programa</th>
                <th className="text-left font-normal">Tipo</th>
                <th className="text-left font-normal">Gênero</th>
                <th className="text-left font-normal">Disponível em</th>
                <th className="text-left font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) =>
                <tr key={index} className={`${index % 2 ? "bg-slate-200" : ""}`}>
                  <td className="text-left py-2" width={125}>{formataData(program.addAt)}</td>
                  <td className="text-left py-2">{program.nameProgram}</td>
                  <td className="text-left">{program.typeOfProgram}</td>
                  <td className="text-left">{program.genre}</td>
                  <td className="text-left">{program.stream.map((s, index) => <span key={`indexstream${index}`}>{s}</span>)}</td>
                  <td className="text-left">
                    <button>Já vi</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
        : ""}
    </>
  )
}