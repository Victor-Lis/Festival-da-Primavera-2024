import type { AlunoType } from "@/@types/AlunoType";
import Description from "./Description";
import TitleRow from "./TitleRow";
import TableAlunos from "./TableAlunos";
import BoxTitle from "../BoxTitle";
import TableTitle from "./TableTitle";
import Buttons from "./Buttons";
import TableBox from "./TableBox";
import { useRef } from "react";

type Props = {
  id: string,
  title: string;
  hora: string;
  local: string;
  alunos_manha: AlunoType[];
  alunos_tarde: AlunoType[];
  alunos_noite: AlunoType[];
};

export default function Modal({
  id,
  title,
  hora,
  local,
  alunos_manha,
  alunos_tarde,
  alunos_noite,
}: Props) {
  return (
    <main className="min-h-[90%] min-w-[300px] w-9/12 px-10 py-4 bg-white rounded flex flex-col">
      <Buttons id={id} title={title}/>
      <TitleRow title={title} hora={hora} local={local} />
      {/* <Description desc={desc as string} /> */}
      <TableBox title="Manhã" alunos={alunos_manha}/>
      <TableBox title="Tarde" alunos={alunos_tarde}/>
      <TableBox title="Noite" alunos={alunos_noite}/>
    </main>
  );
}
