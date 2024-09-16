"use server"
import type { ProjetoType } from "@/@types/ProjetoType";
import { supabase } from ".";

export async function getProjectData({id}: {id: string}): Promise<ProjetoType | null>{
  const { data: project } = await supabase.from("projetos")
  .select("*")
  .eq('id', id)
  return project?.length ? project[0] : null
}