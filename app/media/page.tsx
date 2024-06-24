import Navbar from "../Navbar"
import Image from "next/image"

const Media = () => {
    return (
        <div className="w-full h-screen bg-[#FFF] flex justify-center">
            <Navbar />
            <div className="w-[80%] h-full flex-wrap flex">

                <div className="transition-all duration-200 ease-in">
                    <Image src={'/headshot.jpg'} alt="" width={0} height={0} sizes="300px"
                        style={{ objectFit: 'cover', width: '375px', height: '300px' }} />
                </div>
            </div>
        </div>
    )
}

export default Media