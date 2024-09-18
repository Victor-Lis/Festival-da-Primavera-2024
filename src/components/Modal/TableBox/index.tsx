import type { AlunoType } from "@/@types/AlunoType";
import TableTitle from "../TableTitle";
import TableAlunos from "../TableAlunos";

export default function TableBox({
  title,
  alunos,
}: {
  title: string;
  alunos: AlunoType[];
}) {
  if (alunos.length) {
    return (
      <>
        <TableTitle title={title} />
        <TableAlunos alunos={alunos} />
      </>
    );
  }
}
