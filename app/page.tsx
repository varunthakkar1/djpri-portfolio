import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full flex-col bg-djpri m-0 p-0 overflow-x-hidden">
        <div className="flex w-full h-screen">
          <Image
            src="/headshot.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100vw', height: '100%', objectFit: 'cover', zIndex: 0 }}
            alt=""
          />
          <div className="absolute w-full h-screen z-2 flex flex-col">
            <div className="relative top-[50%] flex w-full justify-center text-6xl text-djpri border-djpri border-[2px]">
              BOOK NOW
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
