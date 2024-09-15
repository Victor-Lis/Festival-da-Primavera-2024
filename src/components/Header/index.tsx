"use client";
import Image from "next/image";
import UniaoEtequianos from "@/assets/uniao_etequianos.png";
import { usePathname, useRouter } from "next/navigation";
import { FiCornerDownLeft } from "react-icons/fi";

export default function Header() {
  const path = usePathname();
  const route = useRouter();

  const handleNavigate = () => route.back()
  return (
    <header className="w-full px-5 h-20 flex justify-between items-center shadow-sm drop-shadow-sm shadow-blue-500">
      <Image
        src={UniaoEtequianos}
        alt="União Etequianos"
        className="h-16 w-20 mr-4"
      />
      {path !== "/" && (
        <button onClick={handleNavigate} className="bg-red-500 text-white px-2 py-1 flex justify-center items-center hover:scale-95 hover:opacity-95 duration-150 uppercase">
          <FiCornerDownLeft size={17.5} color="#fff" className="mr-1" />
          Voltar
        </button>
      )}
      <h2 className="text-xl text-right font-bold text-blue-500">
        Festival de Primeira
      </h2>
    </header>
  );
}
