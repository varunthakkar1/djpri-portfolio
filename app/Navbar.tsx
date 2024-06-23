import Image from "next/image"

const Navbar = () => {
    return (
        <div className="absolute h-[100px] w-[100%] bg-djpri z-50 flex">
            <div className="relative w-full justify-center flex">
                <Image src="/logo.png" alt="" width={0} height={0} style={{ width: '200px', objectFit: 'cover' }} />
            </div>
        </div>
    )
}

export default Navbar