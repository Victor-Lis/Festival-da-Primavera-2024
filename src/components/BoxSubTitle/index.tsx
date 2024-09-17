export default function BoxSubTitle({nome}:{nome: string}) {
  return (
    <div className="bg-blue-500 p-2 mt-5 mx-auto ml-5 flex justify-center items-center">
      <h2 className="text-2xl font-bold text-white">{nome}</h2>
    </div>
  );
}
