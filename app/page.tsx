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
            <div className="relative top-[50%] flex w-full justify-center">
              <Image src="/logo.png" alt="" width={0} height={0} style={{ minWidth: '400px', width: '50%' }} />
            </div>
            <div className=" relative top-[50%] w-full">
              <div className="flex w-full justify-center text-center">
                <div className="py-[10%] font-semibold text-2xl">ABOUT</div>
                <div className="py-[10%] font-semibold text-2xl">MEDIA</div>
                <div className="py-[10%] font-semibold text-2xl">CONTACT</div>
              </div>
            </div>

          </div>

        </div>
        <div className="flex w-full h-[100vh]">

        </div>
      </div>
      <div className="absolute top-0 flex w-full h-screen z-1 bg-sky-500/50">
        HENLO
      </div>
    </main>
  );
}
