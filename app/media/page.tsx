"use client"
import Navbar from "../Navbar"
import Image from "next/image"

const images = [
    '/media4.jpeg', '/media16.jpeg', '/media6.jpeg', '/media8.jpeg', '/media17.jpeg', '/media32.jpeg',
    '/media7.jpeg', '/media10.jpeg',
    '/media14.jpeg', '/media18.jpeg', '/media9.jpeg', '/media19.jpg', '/media20.jpg',
    '/media21.jpg', '/media22.jpg', '/media23.jpg', '/media24.jpg', '/media25.jpg',
    '/media29.jpeg', '/media30.jpeg', '/media34.jpeg', '/media15.jpeg', '/media13.jpeg'
]

const Media = () => {
    return (
        <div className="w-full h-screen bg-[#FFF] flex justify-center overflow-scroll">
            <Navbar />
            <div className="w-[80%] h-full flex-wrap flex mt-[100px] justify-center pt-[50px]">
                {images.map(imageSrc => {
                    return <Image src={imageSrc} width={300} height={300}
                        sizes="1000px" style={{ objectFit: 'cover', padding: '20px' }} alt={""} />
                })}
            </div>
        </div>
    )
}

export default Media