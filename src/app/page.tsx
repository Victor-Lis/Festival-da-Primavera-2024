import Card from "@/components/Card";
import BoxTitle from "@/components/BoxTitle";
import Container from "@/components/Container";

import { getProjects } from "@/connetions/supabase/getProjects";
 
export default async function Home() {
  const projetos = await getProjects()
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-start items-center bg-[url('./../../public/background.png')] bg-cover bg-center">
      <BoxTitle nome="Quarta-Feira" data="18/09/2024"/>
      <Container>
        {projetos.filter((projeto) => projeto.data === "2024-09-18")?.map((projeto) => {
          return <Card title={projeto.nome} hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(0, 5)}`} local={projeto.local} key={projeto.id} id={projeto.id}/>
        })}
      </Container>
      <BoxTitle nome="Quinta-Feira" data="19/09/2024"/>
      <Container>
        {projetos.filter((projeto) => projeto.data === "2024-09-19")?.map((projeto) => {
          return <Card title={projeto.nome} hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(0, 5)}`} local={projeto.local} key={projeto.id} id={projeto.id}/>
        })}
      </Container>
      <BoxTitle nome="Sexta-Feira" data="20/09/2024"/>
      <Container>
        {projetos.filter((projeto) => projeto.data === "2024-09-20")?.map((projeto) => {
          return <Card title={projeto.nome} hora={`${projeto.inicio.slice(0, 5)} - ${projeto.fim.slice(0, 5)}`} local={projeto.local} key={projeto.id} id={projeto.id}/>
        })}
      </Container>
    </div>
  );
}
