"use client"
 
import html2pdf from 'html2pdf.js'

import React, { useRef } from 'react';

import { FiDownload } from 'react-icons/fi'

import { useRouter } from 'next/navigation';

export default function Container({nome, id}:{nome: string, id: string}) {
 const router = useRouter()
 const handleGeneratePDF = () => {
    const opt = {
        marginVertical: 0,
        filename: `projeto ${nome.toLowerCase()}`,
        image: { type: "pdf", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait"}
    }

    setTimeout(() => {
        const modal: any = document?.querySelector("#modal")
        const buttons: any = document?.querySelector("#buttons")

        const localization: any = document?.querySelector("#localization")
        const clock: any = document?.querySelector("#clock")

        const manha: any = document?.querySelector("#manha")
        const tarde: any = document?.querySelector("#tarde")
        const noite: any = document?.querySelector("#noite")

        modal.style.width = "90%"
        modal.style.paddingTop = "0"
        modal.style.margin = "auto"
        
        buttons.style.display = "none"

        localization.style.display = "none"
        clock.style.display = "none"
        
        if(!!manha){ 
            manha.style.padding = "0px"
            manha.style.paddingBottom = "25px"
            manha.style.marginBottom = "10px"
        }else if(!!tarde){
            tarde.style.padding = "0px"
            tarde.style.paddingBottom = "25px"
            tarde.style.marginBottom = "10px"
        } else if(!!noite){
            noite.style.padding = "0px"
            noite.style.paddingBottom = "25px"
            noite.style.marginBottom = "10px"
        }

        html2pdf().from(document.querySelector("#modal")).set(opt).save()
        
        router.back()
        alert("PDF Baixado!")
    }, 100)
 }

 return (
    <button className="bg-blue-500 text-white px-4 py-1 flex justify-center items-center hover:scale-95 hover:opacity-95 duration-150 uppercase" onClick={() => handleGeneratePDF()}> 
        <FiDownload size={20} color='#FFF'/>
        Baixar
    </button>
 );
}