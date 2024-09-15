"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import { insertStudentInProject } from "@/connetions/supabase/insertStudentInProject";
import { redirect, useRouter } from "next/navigation";

export type AlunoType = {
  nome: string;
  curso: "ADM" | "MKT" | "DS" | "RH";
  ano: "1°" | "2°" | "3°";
  periodo: "Manhã" | "Tarde" | "Noite";
};

const schema = z.object({
  nome: z.string().min(3),
  curso: z.enum(["ADM", "MKT", "DS", "RH"]),
  ano: z.enum(["1°", "2°", "3°"]),
  periodo: z.enum(["Manhã", "Tarde", "Noite"]),
});

type FormData = z.infer<typeof schema>;

type FormsParams = {
  id: string;
};

export default function Forms({ params }: { params: FormsParams }) {
  if (!params?.id) redirect("/");

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function translateError(error: string | undefined) {
    if (!error) return;
    if (error === "String must contain at least 3 character(s)") {
      return "O campo acima precisa conter ao menos 3 dígitos!";
    }
    if (
      error === "Expected 'ADM' | 'MKT' | 'DS' | 'RH', received null" ||
      error === "Expected '1°' | '2°' | '3°', received null"
    ) {
      return "O campo acima precisa ser selecionado!";
    }
    return error;
  }

  async function handleFormSubmit(data: FormData) {
    const aluno = { ...data, projeto: params?.id };
    await insertStudentInProject({ aluno })
    alert("Cadastro Realizado!")
    router.replace("/")
  }
  
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-[url('./../../public/background.png')] bg-cover bg-center py-[5%]">
      <form
        className="min-h-[90%] min-w-[300px] sm:min-w-[450px] w-4/12 px-10 py-4 bg-white shadow drop-shadow shadow-blue-500 rounded flex flex-col"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h1 className="text-blue-700 text-3xl m-auto uppercase font-bold">
          Preencha e se inscreva!
        </h1>
        <Input
          type="text"
          name="nome"
          placeholder="Preencha seu nome *completo*"
          register={register}
          error={translateError(errors.nome?.message)}
        />
        <Input
          type="radio"
          name="curso"
          register={register}
          error={translateError(errors.curso?.message)}
          options={[
            { label: "Administração", value: "ADM" },
            { label: "Desenvolvimento de Sistemas", value: "DS" },
            { label: "Marketing", value: "MKT" },
            { label: "Recursos Humanos", value: "RH" },
          ]}
        />
        <Input
          type="radio"
          name="ano"
          register={register}
          error={translateError(errors.ano?.message)}
          options={[
            { label: "1° Ano", value: "1°" },
            { label: "2° Ano", value: "2°" },
            { label: "3° Ano", value: "3°" },
          ]}
        />
        <Input
          type="radio"
          name="periodo"
          register={register}
          error={translateError(errors.periodo?.message)}
          options={[
            { label: "Manhã", value: "Manhã" },
            { label: "Tarde", value: "Tarde" },
            { label: "Noite", value: "Noite" },
          ]}
        />
        <p className="text-red-500 mt-3 text-center">
          Não será possível cancelar sua inscrição após enviar a ficha, então
          verifique com cuidado!
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-10 mt-5 rounded-md hover:opacity-80 hover:scale-95 max-w-40 mx-auto duration-150"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}