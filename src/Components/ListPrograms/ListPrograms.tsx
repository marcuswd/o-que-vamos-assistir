import { useContext } from "react";
import { AddProgramContext } from "../../Context/ProgramContext";

export default function ListPrograms() {
  const { programs } = useContext(AddProgramContext);
  return (
    <>
      {programs.length ?
        <>
          <table className="w-6/12 mx-auto mb-10">
            <thead>
              <tr>
                <th className="text-left">Nome do Programa</th>
                <th className="text-left">Gênero</th>
                <th className="text-left">Disponível em</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) =>
                <tr key={index}>
                  <td className="text-left py-2">{program.nameProgram}</td>
                  <td className="text-left">{program.genre}</td>
                  <td className="text-left">{program.stream.map((s, index) => <span key={`indexstream${index}`}>{s}</span>)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
        : ""}
    </>
  )
}