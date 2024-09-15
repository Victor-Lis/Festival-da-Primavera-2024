export default function BoxTitle({nome, data}:{nome: string, data: string}) {
  return (
    <div className="bg-blue-500 p-2 mt-10 mx-auto ml-1.5 flex justify-center items-center">
      <h2 className="text-2xl font-bold text-white mr-3">{nome}</h2>
      <h2 className="text-2xl font-bold text-white">{data}</h2>
    </div>
  );
}
