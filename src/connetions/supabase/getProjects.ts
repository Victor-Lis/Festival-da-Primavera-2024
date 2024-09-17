"use server"
import type { ProjetoType } from "@/@types/ProjetoType";
import { supabase } from ".";

export async function getProjects({data}:{data: "2024-09-18" | "2024-09-19" | "2024-09-20"}): Promise<ProjetoType[]>{
  const { data: projects } = await supabase.from("projetos").select("*")
  // .eq("data", data)
  .limit(300)
  // //console.log("projects", projects)
  // projects?.filter((p) => //console.log(p.data === data))
  return projects || []
}