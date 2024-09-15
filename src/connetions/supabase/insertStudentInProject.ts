import { supabase } from ".";
import { AlunoType } from "@/@types/AlunoType";

type Props = {
  projeto: string;
  nome: string;
  periodo: string;
  curso: string;
  ano: string;
};

export async function insertStudentInProject({ aluno }: { aluno: Props }) {
  const { data, error } = await supabase
    .from("alunos")
    .insert([{ nome: aluno.nome, curso: aluno.curso, periodo: aluno.periodo, ano: aluno.ano, projeto: aluno.projeto }])
    .select();

  // .then((res) => alert(res))
  console.log("DATA", data);
  console.log("ERROR", error);
  return data || []
}
