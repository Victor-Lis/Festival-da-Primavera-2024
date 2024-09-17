import type { ProjetoType } from "@/@types/ProjetoType";
import BoxTitle from "../BoxTitle";
import Card from "../Card";
import BoxSubTitle from "../BoxSubTitle";

type ContainerProps = {
  nome: string,
  data: string,
  projetos: ProjetoType[]
}

export default function Container({ nome, data, projetos }: ContainerProps) {
  //console.log(projetos)

  const isManha = (hora: string) => ((Number.parseInt(hora[0]+hora[1])*60)+(Number.parseInt(hora[3]+hora[4]))) <= ((Number.parseInt('12')*60)+(Number.parseInt('15')))
  const isNoite = (hora: string) => ((Number.parseInt(hora[0]+hora[1])*60)+(Number.parseInt(hora[3]+hora[4]))) >= ((Number.parseInt('19')*60)+(Number.parseInt('00')))
  const compareMinutos = (a: string, b: string) => ((Number.parseInt(a[0]+a[1])*60)+(Number.parseInt(a[3]+a[4]))) - ((Number.parseInt(b[0]+b[1])*60)+(Number.parseInt(b[3]+b[4])))
  return (
    <>
      <BoxTitle nome={nome} data={data} />
      <BoxSubTitle nome={"Manhã"} />
      <main className="min-h-[85%] my-[2.5%] min-w-[300px] w-11/12 px-10 py-4 gap-x-5 gap-y-2 bg-white/25 shadow drop-shadow shadow-blue-500 rounded flex flex-wrap justify-left items-center">
        {/* {children} */}
        {projetos
          ?.filter((projeto) => projeto.data === "2024-09-18" && isManha(projeto.fim))
          ?.sort((a,b) => compareMinutos(a.inicio,b.inicio))
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
        {projetos
          ?.filter((projeto) => projeto.data === "2024-09-18" && (!isManha(projeto.fim) && !isNoite(projeto.fim)))
          ?.sort((a,b) => compareMinutos(a.inicio,b.inicio))
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
        {projetos
          ?.filter((projeto) => projeto.data === "2024-09-18" && isNoite(projeto.fim))
          ?.sort((a,b) => compareMinutos(a.inicio,b.inicio))
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
    </>
  );
}
