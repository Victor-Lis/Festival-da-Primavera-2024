"use client";
import { getStudentByProjectAndPeriod } from "@/connetions/supabase/getStudentByProject";
import Modal from "../../../components/Modal";
import type { AlunoType } from "@/@types/AlunoType";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getProjectData } from "@/connetions/supabase/getProjectData";
import type { ProjetoType } from "@/@types/ProjetoType";
import { FiLoader } from 'react-icons/fi'

type ProjetoParams = {
  id: string;
};

export default function Projeto({ params }: { params: ProjetoParams }) {
  if (!params?.id) redirect("/");

  const [projeto, setProjeto] = useState<ProjetoType>();
  const [alunosManha, setAlunosManha] = useState<AlunoType[]>([]);
  const [alunosTarde, setAlunosTarde] = useState<AlunoType[]>([]);
  const [alunosNoite, setAlunosNoite] = useState<AlunoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function compareAlunos(a: AlunoType, b: AlunoType): number {
    // Comparação por curso (alfabética)
    if (a.curso !== b.curso) {
      return a.curso.localeCompare(b.curso);
    }

    // Comparação por ano (numérica)
    return parseInt(a.ano) - parseInt(b.ano);
  }

  function organizarAlunos(alunos: AlunoType[]): AlunoType[] {
    return alunos
      .slice() // Cria uma cópia da lista para não modificar a original
      .sort(compareAlunos);
  }

  useEffect(() => {
    async function handleGetData() {
      setLoading(true);
      const projetoData = await getProjectData({ id: params?.id });
      if (!projetoData) redirect("/");
      setProjeto(projetoData);

      const manha = await getStudentByProjectAndPeriod({
        id: params?.id,
        periodo: "Manhã",
      });
      setAlunosManha(manha);

      const tarde = await getStudentByProjectAndPeriod({
        id: params?.id,
        periodo: "Tarde",
      });
      setAlunosTarde(tarde);

      const noite = await getStudentByProjectAndPeriod({
        id: params?.id,
        periodo: "Noite",
      });
      setAlunosNoite(noite);
      setLoading(false);
    }

    handleGetData();
  }, [params?.id]);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center bg-[url('./../../public/background.png')] bg-cover bg-center py-[5%]">
      {(!loading && !!projeto) ? (
        <Modal
          id={params?.id}
          title={projeto?.nome as string}
          hora={`${projeto?.inicio?.slice(0, 5)} - ${projeto?.fim?.slice(0, 5)}`}
          local={projeto?.local as string}
          alunos_manha={organizarAlunos(alunosManha)}
          alunos_tarde={organizarAlunos(alunosTarde)}
          alunos_noite={organizarAlunos(alunosNoite)}
        />
      ): (
        <FiLoader className="animate-spin size-14 mx-auto text-blue-600"/>
      )}
    </div>
  );
}
