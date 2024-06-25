"use client"
import Image from "next/image";
import Navbar from "./Navbar";
import { SlArrowRight } from "react-icons/sl";
import Marquee from "react-fast-marquee";

const clientImages = [
  '/client1.jpeg',
  '/client2.jpg',
  '/client3.jpg',
  '/client4.png',
  '/client5.jpg',
  '/client6.jpeg',
  '/client7.png',
  '/client8.png',
  '/client9.png',
  '/client10.jpg',
  '/client11.jpg',
  '/client12.png'
]

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full flex-col min-h-screen bg-djpri m-0 p-0 overflow-x-hidden">
        <div className="relative flex w-full min-h-screen">
          <Image
            src="/headshot.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100vw', height: '100vh', objectFit: 'cover', zIndex: 0 }}
            alt=""
          />
          <div className="absolute bottom-0 z-10 flex flex-col text-4xl xl:text-6xl ml-[5%] mb-[10%] bg-djpri/30 p-[2%]">
            <div className="font-bold">DJ PRII</div>
            <div className="font-medium">Desi-American DJ</div>
            <a href="/contact" className="text-djpri bg-[#FFF] h-full w-min text-nowrap font-medium cursor-pointer flex">
              Book Now
            </a>

          </div>
        </div>
        <div className="min-h-screen min-w-screen flex flex-wrap justify-between">
          <div className="w-full xl:w-[50%] h-full flex flex-col justify-center z-10">
            <video autoPlay playsInline loop controls muted className="w-full h-screen flex" style={{ objectFit: 'cover' }}>
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="xl:w-[50%] w-full flex flex-col text-2xl xl:text-3xl font-bold my-[10%] px-[5%]">
            DJ PRII: Your one-stop shop for electrifying celebrations! Blending the best of Desi and American music to create unforgettable experiences.
            She is an open format DJ with a twist, seamlessly weaving desi, Bollywood, hip-hop, latin, afro beats, and house music into infectious sets that cater to all crowds. Make your next event legendary! Book DJ PRII for weddings, corporate functions, private parties, and bar functions
            <a href="/about" className="text-djpri bg-[#FFF] min-w-[300px] max-w-[500px] font-medium mt-[5%] px-[5%] cursor-pointer flex">Learn More About DJ PRII</a>
          </div>
        </div>
        <div className="min-w-screen bg-[#FFF] flex flex-col justify-center">
          <div className="font-bold text-2xl xl:text-3xl w-full p-[5%] text-djpri flex justify-center text-center">Event Highlights - TORRID Casting Call June 2024</div>
          <div className="w-full flex flex-wrap justify-between">
            <Image className="xl:w-[33%] w-full" src={"/event1.jpeg"} width={0} height={0} alt="" sizes="1280px" style={{ objectFit: 'cover', minWidth: '350px' }} />
            <video className="xl:w-[33%] w-full" style={{ objectFit: 'cover', minWidth: '350px', maxHeight: '800px' }} autoPlay playsInline loop controls muted>
              <source src="/video2.mov" type="video/mp4" />
            </video>
            <Image className="xl:w-[33%] w-full" src={"/event2.jpeg"} width={0} height={0} alt="" sizes="1280px" style={{ objectFit: 'cover', minWidth: '350px' }} />
          </div>
        </div>
        <div className="font-bold text-2xl xl:text-3xl w-full text-[#FFF] p-[5%] bg-djpri flex justify-center text-center">Past Clients</div>
        <Marquee speed={100} style={{ height: '400px' }}>
          {clientImages.map((imageSrc, index) => {
            return <Image key={index} src={imageSrc} width={0} height={0} sizes="720px" alt="" style={{ objectFit: 'cover', height: '400px', width: 'auto' }} />
          })}
        </Marquee>
      </div>
    </main >
  );
}
