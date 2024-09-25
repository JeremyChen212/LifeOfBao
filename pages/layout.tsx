import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link';
export default function Layout({ children }) {
    const router = useRouter();

    useEffect(()=>{
        console.log(router.pathname)
    })
    return (
      <>
        <div className="absolute top-[2rem] translate-x-[-50%] left-[50%] max-w-[1100px] px-[4rem] flex items-center justify-between w-full z-50">
            <Link href="/">
                <Image alt={"LifeOfBao"} width="400" height="400" src={'/images/LifeOfBao.png'} className={`w-[4rem] z-50 opacity-50 hover:opacity-100 transition duration-400 ease-out ${router.pathname === "/" ? "opacity-100" : "opacity-40"}`}/>
            </Link>
            <div className={`flex gap-[1rem] text-[1.25rem] font-[CafeFrancoise] `}>
                <Link href="/story" className={`transition duration-400 ease-out hover:opacity-70 ${router.pathname === "/story" ? "opacity-100" : "opacity-40"} opacity-50 cursor-pointer`}>Story</Link>
                <Link href="/roadmap" className={`transition duration-400 ease-out hover:opacity-70 opacity-50 cursor-pointer ${router.pathname === "/roadmap" ? "opacity-100" : "opacity-40"}`}>Roadmap</Link>
                <Link href="" className={`transition duration-400 ease-out hover:opacity-70 opacity-50 ${router.pathname === "/faq" ? "opacity-100" : "opacity-40"}`}>FAQ</Link>
            </div>
        </div>
        <main>{children}</main>
      </>
    )
  }