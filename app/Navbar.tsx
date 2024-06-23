"use client"
import Image from "next/image"
import { useState } from "react"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <div className="absolute h-[100px] w-[100%] bg-djpri z-50 flex">
            <div className="absolute w-full justify-center flex">
                <Image src="/logo.png" alt="" width={0} height={0} style={{ width: '200px', objectFit: 'cover' }} />
            </div>
            <div className="absolute w-full justify-between flex">
                <div className="flex h-[100px]">
                    
                </div>
                <div className="flex h-[100px] pr-[10%]">
                    <a href="/about" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        ABOUT
                    </a>
                    <a href="/about" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        MEDIA
                    </a>
                    <a href="/about" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        CONTACT
                    </a>
                    <div className="flex xl:hidden flex-col justify-center" onClick={() => setNavbarOpen(!navbarOpen)}>
                        <RxHamburgerMenu size={'40px'}/>
                    </div>
                </div>
            </div>
            <div className="w-full bg-djpri z-50 h-screen transition duration-300 ease-in-out" 
                 style={{ transform: navbarOpen ? 'translateX(0%)' : 'translateX(100%)' }}>
                <div className="absolute h-[100px] w-full flex justify-end pr-[10%]">
                    <div className="h-full">
                        <div className="flex xl:hidden flex-col justify-center h-full" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <RxCross1 size={'40px'}/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-[20%]">
                    <div className="w-full text-4xl flex justify-center py-[4%] font-bold">
                        <a href="/about">ABOUT</a>
                    </div>
                    <div className="w-full text-4xl flex justify-center py-[4%]">
                        <a href="/media">MEDIA</a>
                    </div>
                    <div className="w-full text-4xl flex justify-center py-[4%]">
                        <a href="/contact">CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar