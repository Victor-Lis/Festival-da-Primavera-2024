"use server"
import type { ProjetoType } from "@/@types/ProjetoType";
import { supabase } from ".";

export async function getProjects(): Promise<ProjetoType[]>{
  const { data: projects } = await supabase.from("projetos").select("*")
  .limit(200)
  console.log(projects)
  return projects || []
}