"use server"
import { supabase } from ".";
import { AlunoType } from "@/@types/AlunoType";

export async function getStudentByProjectAndPeriod({
  id,
  periodo
}: {
  id: string;
  periodo: "Manhã" | "Tarde" | "Noite"
}): Promise<AlunoType[]> {

  let { data: alunos, error } = await supabase
  .from('alunos')
  .select('*')
  .in("periodo", [periodo])
  .limit(100)
          
  console.log("ALUNOS", alunos)
  console.log("ERROR", error)
          
  return alunos as unknown as AlunoType[];
}
