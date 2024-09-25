import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Layout({ children }) {
    const router = useRouter();

    useEffect(()=>{
        console.log(router.pathname)
    })
    return (
      <>
        <div className="absolute top-[2rem] translate-x-[-50%] left-[50%] max-w-[1100px] px-[4rem] flex items-center justify-between w-full z-50">
            <a href="/">
                <Image alt={"LifeOfBao"} width="400" height="400" src={'/images/LifeOfBao.png'} className={`w-[4rem] z-50 opacity-50 hover:opacity-100 transition duration-400 ease-out ${router.pathname === "/" ? "opacity-100" : "opacity-40"}`}/>
            </a>
            <div className={`flex gap-[1rem] text-[1.25rem] font-[CafeFrancoise] `}>
                <a href="/story" className={`transition duration-400 ease-out hover:opacity-70 ${router.pathname === "/story" ? "opacity-100" : "opacity-40"} opacity-50 cursor-pointer`}>Story</a>
                <a href="/roadmap" className={`transition duration-400 ease-out hover:opacity-70 opacity-50 cursor-pointer ${router.pathname === "/roadmap" ? "opacity-100" : "opacity-40"}`}>Roadmap</a>
                <a href="" className={`transition duration-400 ease-out hover:opacity-70 opacity-50 ${router.pathname === "/faq" ? "opacity-100" : "opacity-40"}`}>FAQ</a>
            </div>
        </div>
        <main>{children}</main>
      </>
    )
  }