import Card from "@/components/Card";
import BoxTitle from "@/components/BoxTitle";
import Container from "@/components/Container";

import { getProjects } from "@/connetions/supabase/getProjects";
import BoxSubTitle from "@/components/BoxSubTitle";

export default async function Home() {
  const isManha = (hora: string) =>
    Number.parseInt(hora[0] + hora[1]) * 60 +
      Number.parseInt(hora[3] + hora[4]) <=
    Number.parseInt("12") * 60 + Number.parseInt("15");
  const isNoite = (hora: string) =>
    Number.parseInt(hora[0] + hora[1]) * 60 +
      Number.parseInt(hora[3] + hora[4]) >=
    Number.parseInt("19") * 60 + Number.parseInt("00");
  const compareMinutos = (a: string, b: string) =>
    Number.parseInt(a[0] + a[1]) * 60 +
    Number.parseInt(a[3] + a[4]) -
    (Number.parseInt(b[0] + b[1]) * 60 + Number.parseInt(b[3] + b[4]));

  const projetosQuarta = await getProjects({ data: "2024-09-18" }).then((res) =>
    res.filter((p) => p.data === "2024-09-18")
  );
  // console.log(projetosQuarta.length);
  const projetosQuinta = await getProjects({ data: "2024-09-19" }).then((res) =>
    res.filter((p) => p.data === "2024-09-19")
  );
  // console.log(projetosQuinta.length);
  const projetosSexta = await getProjects({ data: "2024-09-20" }).then((res) =>
    res.filter((p) => p.data === "2024-09-20")
  );

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-start items-center bg-[url('./../../public/background.png')] bg-cover bg-center">
      <BoxTitle nome={"Quarta-Feira"} data={"18/09/2024"} />
      <BoxSubTitle nome={"Manhã"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuarta
          ?.filter((projeto) => isManha(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Tarde"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuarta
          ?.filter((projeto) => !isManha(projeto.fim) && !isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Noite"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuarta
          ?.filter((projeto) => isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxTitle nome={"Quinta-Feira"} data={"19/09/2024"} />
      <BoxSubTitle nome={"Manhã"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuinta
          ?.filter((projeto) => isManha(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Tarde"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuinta
          ?.filter((projeto) => !isManha(projeto.fim) && !isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Noite"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosQuinta
          ?.filter((projeto) => isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxTitle nome={"Sexta-Feira"} data={"20/09/2024"} />
      <BoxSubTitle nome={"Manhã"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosSexta
          ?.filter((projeto) => isManha(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Tarde"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosSexta
          ?.filter((projeto) => !isManha(projeto.fim) && !isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <BoxSubTitle nome={"Noite"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetosSexta
          ?.filter((projeto) => isNoite(projeto.fim))
          ?.sort((a, b) => compareMinutos(a.inicio, b.inicio))
          ?.map((projeto) => {
            return (
              <Card
                title={projeto.nome}
                hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(
                  0,
                  5
                )}`}
                local={projeto.local}
                key={projeto.id}
                id={projeto.id}
              />
            );
          })}
      </main>
      <div className="fixed flex gap-x-1.5 bottom-2 right-2 p-2 bg-white rounded">
        <h2 className="text-blue-500">Feito por</h2>
        <a className="text-blue-700 font-bold" href="https://www.linkedin.com/in/victor-lis-bronzo/">Victor Lis</a>
      </div>
    </div>
  );
}
