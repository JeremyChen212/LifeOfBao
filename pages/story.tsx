import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const cafefrancoise = localFont({ src: '../public/fonts/Cafe Francoise_D.otf' })


const inter = Inter({ subsets: ['latin'] })

export default function Story() {
  return (
    <main
      className={`flex bg-[#F15C61] min-h-[100vh] flex-col items-center justify-between`}
    >
        
        <div className="relative max-w-[840px] py-[8rem] roadmap">

            <h1 className="text-center mb-[2rem] font-[hiromisake] text-[3.4rem] indent-4 px-[4rem]">The Story</h1>
            <div className="grid grid-cols-3 grid-rows-2 w-full  text-center mb-[-4rem]">
                <Image alt={"YoungDanno"} width="5000" height="5000" src={'/images/YoungDanno.png'} className="w-[12rem] col-span-1 m-auto"
                      />
                 
                
                <Image alt={"YoungRamiPointing"} width="5000" height="5000" src={'/images/YoungRamiPointing.png'} className="w-[12rem] left-[10rem] m-auto"
                      />
                
                <Image alt={"YoungStu"} width="5000" height="5000" src={'/images/YoungStu.png'} className="w-[12rem] m-auto"
                      />
                <h2 className="text-[1.25rem]">Stu</h2>     
                <h2 className="text-[1.25rem]">Rami</h2> 
                <h2 className="text-[1.25rem]">Danno</h2>      

            </div>
            
                {/* <h2>Health & Wellbeing</h2>       */}
                <p className="indent-8 mb-6 text-[1.15rem]">Our journey follows the lives of three life-long friends: Stu the chef, Danno the skateboarder, and Rami the intellect. Meeting each other in elementary, their bond continued strong up until highschool, when they unfortunately split schools. 
                </p>
                <p className="indent-8 mb-6 text-[1.15rem]">However during one summer break, they planned to meet each other after so long. When they met, they stumbled upon a nice korean steakhouse restaurant. It was a dark, empty family-owned restaurant with barbeque stoves on each table. Relunctant at first, they sat down for a meal. This turned out to be the best meal they've ever had, igniting their bond and love for food started. 
                </p>
                <p className="indent-8 mb-6 text-[1.15rem]">
                Ever since then, they have continued to explore different food cuisines, even meeting new friends along the way. They've gone out and tried unique desserts like Taiyaki, Halo Halo and Pisang Goreng, and savory meals like Mi Go Rang and Thai Yellow Curry. Among them is one thing they haven't got enough of, Boba. Whenever they feel like doing something, getting boba came naturally and the plan. 
                </p>
                <p className="indent-8 mb-6 text-[1.15rem]">Fast forward to today, although they have gone on different career and life paths, they have continued to grow their food love. They started building a large food community called, "LOB".
                </p>
                


                
        </div>
      
      
    </main>
  )
}
