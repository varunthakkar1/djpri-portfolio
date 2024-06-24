import Navbar from "../Navbar"
import Image from "next/image"

const About = () => {
    return (
        <div className="flex w-full h-screen overflow-scroll bg-[#FFFFFF] flex-wrap">
            <Navbar />
            <div className="flex w-[100%] xl:w-[50%] text-center xl:text-right mt-[100px] pt-[5%] pr-[10%] xl:pr-[5%] pl-[10%] font-semibold xl:text-2xl text-xl 2xl:text-3xl">
                <div className="text-djpri flex">
                    DJ PRII (Priyanka Thakkar) is a rising star in the LA DJ scene, bringing the heat with her globally-inspired mixes. Since diving into the world of DJing in 2020, PRII has relentlessly honed her craft, graduating from not one, but two prestigious DJ schools: the Academy of DJs (2020) and the Beat Junkies Institute of Sound (2023).

                    Her passion lies in creating electrifying sets that blend genres like Bollywood/desi, reggaeton, Afrobeats, R&B, hip-hop, and house music.  PRII believes music is a universal language, and her mixes are all about uniting people and uplifting spirits on the dance floor.

                    Whether it's a corporate event, a trendy restaurant, a pulsing club, or an intimate wedding, PRII brings her versatility and infectious enthusiasm to every gig, guaranteeing an unforgettable musical experience.
                </div>

            </div>
            <div className="flex w-[100%] xl:w-[50%] text-center xl:mt-[100px] py-[5%] px-[25px] font-semibold text-4xl justify-center xl:justify-normal">
                <Image src={'/about1.jpeg'} width={0} height={0} alt="" sizes="100%" style={{ maxHeight: '800px', width: '80%', objectFit: 'cover', display: 'flex' }} />
            </div>
        </div>
    )
}

export default About