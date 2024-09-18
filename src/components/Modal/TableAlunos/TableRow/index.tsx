import type{ AlunoType } from "@/@types/AlunoType";

export default function TableRow({nome, curso, ano, periodo}: AlunoType) {
  return (
    <tr className="bg-blue-500/30">
      <td className="px-6 py-4 whitespace-nowrap w-2/3 text-white">{nome}</td>
      <td className="px-6 py-4 whitespace-nowrap max-sm:hidden w-1/6 text-white">{curso}</td>
      <td className="px-6 py-4 whitespace-nowrap w-1/6 text-white">{ano}</td>
    </tr>
  );
}
