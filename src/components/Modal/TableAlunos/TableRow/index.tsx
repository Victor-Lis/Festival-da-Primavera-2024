import type{ AlunoType } from "@/@types/AlunoType";

export default function TableRow({nome, curso, ano, periodo}: AlunoType) {
  return (
    <tr className="bg-blue-500/30">
      <td className="px-6 py-4 whitespace-nowrap w-2/3 text-blue-500">{nome}</td>
      <td className="px-6 py-4 whitespace-nowrap max-sm:hidden w-1/6 text-blue-500">{curso}</td>
      <td className="px-6 py-4 whitespace-nowrap w-1/6 text-blue-500">{ano}</td>
    </tr>
  );
}
