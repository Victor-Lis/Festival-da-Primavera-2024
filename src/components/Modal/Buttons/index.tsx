"use client"

import Link from "next/link";
import { FaX } from 'react-icons/fa6'
import { BiMailSend } from "react-icons/bi";
import { useRouter } from "next/navigation";
import ButtonDownload from "@/components/ButtonDownload";

export default function Buttons({id, title}:{id: string, title: string, }) {
 const router = useRouter()
 const handleNavigate = () => router.push(`/projeto/${id}/forms`)

 return (
  <div className="flex flex-wrap justify-center items-center mt-2 gap-y-2 gap-x-5" id="buttons">
  <ButtonDownload nome={title} id={id}/>
  <button onClick={handleNavigate} className="bg-blue-500 text-white px-4 py-1 flex justify-center items-center hover:scale-95 hover:opacity-95 duration-150 uppercase">
    Inscreva-se
    <BiMailSend size={20} color="#fff" className="ml-2"/>
  </button>
</div>
 );
}