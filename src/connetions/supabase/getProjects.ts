import { ProjetoType } from "@/@types/ProjetoType";
import { supabase } from ".";

export async function getProjects(): Promise<ProjetoType[]>{
  const { data: projects } = await supabase.from("projetos").select("*")
  return projects || []
}