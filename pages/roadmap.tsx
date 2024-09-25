import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const cafefrancoise = localFont({ src: '../public/fonts/Cafe Francoise_D.otf' })


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex bg-[#F15C61] h-full flex-col items-center justify-between`}
    >
        
        <div className="relative max-w-[840px] py-[8rem] roadmap">
            <h1 className="text-center mb-[2rem] font-[hiromisake] text-[3.4rem] px-[4rem]">Roadmap And Goals</h1>
            <div className="grid grid-cols-8 gap-[3rem] gap-y-[3rem] max-md:grid-cols-1 items-center max-md:text-center px-[3rem]">
                <Image alt={"CommunityImage"} width="5000" height="5000" src={'/images/CommunityImage.png'} className="w-[12rem] col-span-2 max-md:col-span-1 justify-self-center"
                        />
                <div className='flex flex-col col-span-6 max-md:col-span-1 row-span-1'>
                    <h2>Community & Food...</h2>
                    <p>This is ongoing but to start we will have community events, puzzles, and start a compiled list of everyones favorite restaurants</p>
                </div>
                <Image alt={"BaoCase"} width="5000" height="5000" src={'/images/BaoCase.png'} className="w-[8rem] col-span-2 max-md:col-span-1 justify-self-center"
                        />
                <div className='flex flex-col col-span-6 max-md:col-span-1'>
                    <h2>Release the baos!!</h2>
                    <p>Generate and list 500 unique Baos on OpenSea</p>
                </div>
                <Image alt={"Flag"} width="5000" height="5000" src={'/images/Flag.png'} className="w-[5rem] col-span-2 max-md:col-span-1 justify-self-center"
                        />
                <div className='flex flex-col col-span-6 max-md:col-span-1'>
                    <h2>Exclusive Merch</h2>
                    <p>All holders will get exclusive hoodies and t-shirts (and maybe some accessories)</p>
                </div>
                <Image alt={"WorkoutBao"} width="5000" height="5000" src={'/images/WorkoutBao.png'} className="w-[12rem] col-span-2 max-md:col-span-1 justify-self-center"
                        />
                <div className='flex flex-col col-span-6 max-md:col-span-1'>
                    <h2>Health & Wellbeing</h2>      
                    <p>Involve the community in practicing good physical & mental health. 
            Develop an exclusive acess fitness app.</p>
                </div>
            </div>

            

        </div>
      
      
    </main>
  )
}
