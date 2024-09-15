"use client"
import { getStudentByProjectAndPeriod } from "@/connetions/supabase/getStudentByProject";
import Modal from "../../../components/Modal";
import { AlunoType } from "@/@types/AlunoType";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type ProjetoParams = {
  id: string
}

export default function Projeto({params}: {params: ProjetoParams}) {
  if(!params?.id) redirect("/")

  const [alunosManha, setAlunosManha] = useState<AlunoType[]>([])
  const [alunosTarde, setAlunosTarde] = useState<AlunoType[]>([])
  const [alunosNoite, setAlunosNoite] = useState<AlunoType[]>([])

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
    async function handleGetData(){
      const manha = await getStudentByProjectAndPeriod({id: params?.id, periodo: "Manhã"})
      setAlunosManha(manha)

      const tarde = await getStudentByProjectAndPeriod({id: params?.id, periodo: "Tarde"})
      setAlunosTarde(tarde)

      const noite = await getStudentByProjectAndPeriod({id: params?.id, periodo: "Noite"})
      setAlunosNoite(noite)
    }

    handleGetData()
  }, [])

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center bg-[url('./../../public/background.png')] bg-cover bg-center py-[5%]">
      <Modal
        id={params?.id}
        title={"Just Dance"}
        hora="9:45 - 11:25"
        local="Sala 4"
        alunos_manha={organizarAlunos(alunosManha)}
        alunos_tarde={organizarAlunos(alunosTarde)}
        alunos_noite={organizarAlunos(alunosNoite)}
      />
    </div>
  );
}
