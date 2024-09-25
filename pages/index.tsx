import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const cafefrancoise = localFont({ src: '../public/fonts/Cafe Francoise_D.otf' })


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex bg-[#F15C61] h-full min-h-screen flex-col items-center justify-between`}
    >
      <div className='h-[100vh] relative w-[100vw]'>
        <Image alt={"BaoStanceWithText"} width="5000" height="5000"
              src={'/images/BaoStanceWithText.png'} className="absolute block h-auto w-[30rem] translate-y-[-50%] top-[50%] translate-x-[-50%] left-[50%]"
              />
        <Image alt={"Arrow"} width="5000" height="5000"
              src={'/images/Arrow.png'} className="absolute w-[3rem] animate-bounce translate-y-[-50%] bottom-[8%] translate-x-[-50%] left-[47%]"
              />
      </div>
      
      <div className='grid grid-cols-7 gap-20  max-md:grid-cols-1 justify-center my-40 px-[4rem]'>
        <div className='flex flex-col w-full max-md:order-2 m-auto text-center col-span-4 max-w-[30rem]'>
          <h1 className={`${cafefrancoise}`}>WElCOME TO THE LIFEOFBAO</h1>
          <p className=''>LifeOfBao is a collection of 500 unique  bao  NFTS, with a range of all sorts of bao types and food traits. This is a project centered around  food  ,  fitness  , health, and lifestyle. Each token will also serve as an access to unique member only benefits, ranging from airdrops to exclusive digital experiences and merch. We’ll also continue in the direction of our goal by developing fitness/recipe apps, learning resources, and more to help out our members.</p>
        </div>
        <Image alt={"BaoFourStamp"} width="5000" height="5000"
            src={'/images/BaoFourStamp.png'} className="w-auto h-[18rem] col-span-3 max-md:col-span-4 m-auto"
            />
      </div>

      <div className='w-full relative bg-[#F6E8DD] h-[34rem] mt-[20rem] mb-40'>
        <Image alt={"DumplingHeader"} width="5000" height="5000"
              src={'/images/DumplingHeader.png'} className="absolute w-[30rem] z-10 translate-y-[-50%] top-[-14%] translate-x-[-50%] left-[50%]"
              />
        <h1 className='text-[#F15C61] z-20 absolute  translate-y-[-50%] top-[-10%] translate-x-[-50%] left-[50%] text-center'>CHARACTER <br></br> SPECS</h1>
        <div className='absolute w-[15rem] z-10 translate-y-[-50%] top-[50%] translate-x-[-50%] left-[50%]'>
            <Image alt={"TaiyakiTranpsarent"} width="5000" height="5000"
              src={'/images/TaiyakiTranpsarent.png'} className=""
              />
            <div className="absolute left-[-45%] bottom-[-30%] text-center ">
              <div className='absolute w-[8rem] h-[3px] rounded-full z-40 bg-[#F15C61] rotate-[-20deg] translate-x-[8rem]'></div>
              <span className="underline">BOTTOM GEAR</span>
              <br />
              <span>Taiyaki</span>
            </div>
            <div className="absolute left-[-45%] top-[-30%] text-center">
              <div className='absolute w-[6.8rem] h-[3px] rounded-full z-40 bg-[#F15C61] rotate-[20deg] translate-x-[9.5rem] top-[4.5rem]'></div>
              <span className="underline">HEAD GEAR</span>
              <br />
              <span>Vanilla Icecream</span>
            </div>
            <div className="absolute right-[-45%] top-[0%] text-center">
              <div className='absolute w-[6.8rem] h-[3px] rounded-full z-40 bg-[#F15C61] rotate-[-35deg] translate-x-[-7rem] top-[4.3rem]'></div>
              <span className="underline">EYES</span>
              <br />
              <span>Squint</span>
            </div>
            <div className="absolute right-[-52%] top-[52%] text-center">
              <div className='absolute w-[6.2rem] h-[3px] rounded-full z-40 bg-[#F15C61] rotate-[0deg] translate-x-[-7rem] top-[1rem]'></div>
              <span className="underline">MOUTH</span>
              <br />
              <span>Flat</span>
            </div>
            <div className="absolute left-[-50%] top-[48%] text-center">
              <div className='absolute w-[6.6rem] h-[3px] rounded-full z-40 bg-[#F15C61] rotate-[0deg] translate-x-[7rem] top-[1rem]'></div>
              <span className="underline">CHEEKS</span>
              <br />
              <span>Pink Sweat</span>
            </div>
        </div>
        {/* <p className='absolute translate-y-[-50%] bottom-[20px] translate-x-[-50%] left-[50%] text-[#232323] opacity-70'>Hover over each trait to see details</p> */}
      </div>

      <div className="mb-20">
        <div className="relative pb-[10rem] text-center max-w-[840px] p-[4rem]">
              <h1>THE STORY</h1>
                        <p>This project follows the life of three bao  who have been close since young. Stu, Danno, and Rami. 
                There is one thing that has brought them to
                <br />
                
              </p>
              <a href="/story" >
                <button className="py-4 px-6 mt-20 bg-[#F6E8DD] rounded-md text-[#F15C61] transition hover:rotate-[-3deg] hover:translate-y-[-2px] hover:shadow-lg"><p>Learn More</p>
                </button>
              </a>
                <Image alt={"YoungDanno"} width="5000" height="5000"
                      src={'/images/YoungDanno.png'} className="w-[12rem] absolute bottom-0 right-20 scale-x-[-1]"
                      />
                <Image alt={"YoungRamiPointing"} width="5000" height="5000"
                      src={'/images/YoungRamiPointing.png'} className="w-[12rem] absolute bottom-[-6px] left-[10rem]"
                      />
                <Image alt={"YoungStu"} width="5000" height="5000"
                      src={'/images/YoungStu.png'} className="w-[12rem] absolute bottom-0 left-[0rem]"
                      />
             </div>
      </div>
      
      <div className="relative border-t-2 border-[#F6E8DD] border-opacity-60 text-center max-w-[840px] py-[8rem] pb-[10rem] px-[4rem]">
        <h1>OUR PLAN</h1>
        <p>Once we release our art collection, we will continue developing and designing new experiences for our members. We’ll begin with <b>custom merch</b> with your character, special  <b>community events</b>, airdrops, <b>digital accessories</b>, and move to one of our big checkpoint, a unique <b className="">fitness/recipe app</b> for our members. Our overall goal, improve to lives of others through a bit of healthy practices.
        </p>
        <a href='/roadmap'>
          <button className="py-4 px-6 mt-20 bg-[#F6E8DD] rounded-md text-[#F15C61] transition hover:rotate-[-3deg] hover:translate-y-[-2px] hover:shadow-lg"><p>View Full Roadmap</p></button>
        </a>
      </div>
      
      
    </main>
  )
}
