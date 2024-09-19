export default function TableTitle({title}:{title: string}) {
  const getId = (s: string) => s == "Manhã" ? "manha" : s == "Tarde" ? "tarde" : "noite"
  return <h2 className="bg-blue-700 text-white text-2xl mt-10 py-2 px-6 w-32 text-center" id={getId(title)}>{title}</h2>;
}
