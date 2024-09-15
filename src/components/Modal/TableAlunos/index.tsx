import TableRow from "./TableRow";
import { AlunoType } from "@/@types/AlunoType";

export default function TableAlunos({alunos}:{alunos: AlunoType[]}) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className="bg-blue-500 border-blue-500 border">
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Nome
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider max-sm:hidden">
            Curso
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Ano
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {alunos?.map(aluno => {
          return <TableRow {...aluno} key={Math.random()}/>
        })}
      </tbody>
    </table>
  );
}
