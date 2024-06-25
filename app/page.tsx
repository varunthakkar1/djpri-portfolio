import Image from "next/image";
import Navbar from "./Navbar";
import { SlArrowRight } from "react-icons/sl";

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
              Book Now→
            </a>

          </div>
        </div>
        <div className="min-h-screen min-w-screen flex flex-wrap justify-between">
          <div className="w-full xl:w-[50%] h-full flex flex-col justify-center z-10">
            <video autoPlay playsInline loop controls muted className="w-full h-screen flex" style={{ objectFit: 'cover' }}>
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="xl:w-[50%] w-full flex flex-col text-3xl font-bold my-[10%] px-[5%]">
            DJ PRII: Your one-stop shop for electrifying celebrations! Blending the best of Desi and American music to create unforgettable experiences.
            She is an open format DJ with a twist, seamlessly weaving desi, Bollywood, hip-hop, latin, afro beats, and house music into infectious sets that cater to all crowds. Make your next event legendary! Book DJ PRII for weddings, corporate functions, private parties, and bar functions
            <a href="/about" className="text-djpri bg-[#FFF] min-w-[300px] max-w-[500px] font-medium mt-[5%] px-[5%] cursor-pointer flex">Learn More About DJ PRII→</a>
          </div>
        </div>
        <div className="min-h-screen min-w-screen bg-[#FFF]">

        </div>
      </div>
    </main>
  );
}
