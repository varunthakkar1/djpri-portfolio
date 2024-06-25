"use client"
import Image from "next/image"
import { useState } from "react"
import { BsInstagram } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <div className="fixed h-[100px] w-[100%] bg-djpri z-50 flex" >
            <div className="absolute w-full justify-center flex">
                <Image onClick={() => location.href = "/"} src="/logo.png" alt="" sizes="200px" width={0} height={0} style={{ width: '200px', objectFit: 'cover' }} />
            </div>
            <div className="absolute w-full justify-between flex">
                <div className="flex h-[100px] pl-[5%]">
                    <a target="_blank" href={'https://www.instagram.com/djprii/'} className="flex flex-col justify-center">
                        <BsInstagram size={'30px'} />
                    </a>
                </div>
                <div className="flex h-[100px] pr-[5%] xl:pr-[12%]">
                    <a href="/" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        HOME
                    </a>
                    <a href="/about" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        ABOUT
                    </a>
                    <a href="/media" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        MEDIA
                    </a>
                    <a href="/contact" className="xl:flex hidden flex-col justify-center text-nowrap text-xl px-[6%]">
                        CONTACT
                    </a>
                    <div className="flex xl:hidden flex-col justify-center cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
                        <RxHamburgerMenu size={'40px'} />
                    </div>
                </div>
            </div>
            <div className="w-full bg-djpri z-50 h-screen transition-all duration-300 ease-in-out"
                style={{
                    transform: navbarOpen ? 'translateX(0%)' : 'translateX(100%)',
                    opacity: navbarOpen ? '100%' : '0%',
                    width: navbarOpen ? '100%' : '0%',
                }}>
                <div className="absolute h-[100px] w-full flex justify-end pr-[5%]">
                    <div className="h-full" style={{ display: navbarOpen ? 'flex' : 'none' }}>
                        <div className="flex xl:hidden flex-col justify-center h-full" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <RxCross1 size={'40px'} />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-[20%]" style={{ display: navbarOpen ? 'flex' : 'none' }}>
                    <div className="w-full text-4xl flex justify-center py-[4%]">
                        <a href="/">HOME</a>
                    </div>
                    <div className="w-full text-4xl flex justify-center py-[4%]">
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