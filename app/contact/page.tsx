"use client"
import { useState } from "react"
import Navbar from "../Navbar"
const Contact = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [buttonText, setButtonText] = useState<string>("SUBMIT")

    const submit = () => {
        const body = {
            "service_id": process.env.NEXT_PUBLIC_SERVICE_ID,
            "template_id": process.env.NEXT_PUBLIC_TEMPLATE_ID,
            "user_id": process.env.NEXT_PUBLIC_USER_KEY,
            "template_params": {
                "from_name": name,
                "email": email,
                "phone": phone,
                "date": date,
                "desc": desc
            }
        }

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST', body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            setButtonText('Message sent!')
        }).catch((reason) => {
            console.log(reason)
        })
    }

    const inputWrapperClass = "w-full xl:w-[45%] min-w-[300px] flex flex-col my-[25px]"

    return (
        <div className="w-full min-h-screen bg-[#FFF] flex justify-center">
            <Navbar />
            <div className="w-[60%] min-w-[350px] flex-col flex mt-[100px] pt-[5%]">
                <div className="text-djpri w-full text-2xl flex justify-center h-min">
                    Contact me directly at djprii.bookings@gmail.com or fill out this form!
                </div>
                <div className="flex flex-wrap w-full justify-between">
                    <div className={inputWrapperClass}>
                        <label htmlFor="name" className="flex mb-2 text-2xl text-djpri">Name/Organization</label>
                        <input onChange={ev => setName(ev.target.value)}
                            className="w-full h-[50px] bg-djpri opacity-50 text-white placeholder-white rounded outline-none text-xl pl-[1%]" title="name" />
                    </div>
                    <div className={inputWrapperClass}>
                        <label htmlFor="email" className="flex mb-2 text-2xl text-djpri">Email</label>
                        <input onChange={ev => setEmail(ev.target.value)}
                            className="w-full h-[50px] bg-djpri opacity-50 text-white placeholder-white rounded outline-none text-xl pl-[1%]" title="email" />
                    </div>
                    <div className={inputWrapperClass}>
                        <label htmlFor="phone" className="flex mb-2 text-2xl text-djpri">Phone Number</label>
                        <input onChange={ev => setPhone(ev.target.value)}
                            className="w-full h-[50px] bg-djpri opacity-50 text-white placeholder-white rounded outline-none text-xl pl-[1%]" title="phone" />
                    </div>
                    <div className={inputWrapperClass}>
                        <label htmlFor="date" className="flex mb-2 text-2xl text-djpri">Date</label>
                        <input type="date" onChange={ev => setDate(ev.target.value)}
                            className="w-full h-[50px] bg-djpri opacity-50 text-white placeholder-white rounded outline-none text-xl px-[1%]" title="date" />
                    </div>
                    <div className={"w-full min-w-[300px] flex flex-col my-[25px]"}>
                        <label htmlFor="desc" className="flex mb-2 text-xl text-djpri">Event Description</label>
                        <textarea onChange={ev => setDesc(ev.target.value)}
                            className="w-full h-[150px] bg-djpri opacity-50 text-white placeholder-white rounded outline-none text-xl pl-[1%]" title="desc" />
                    </div>
                </div>
                <button disabled={[name, phone, email, desc, date].some(v => v.trim() === "") || buttonText !== 'SUBMIT'} onClick={submit}
                    className="w-full h-[50px] bg-djpri text-white text-2xl rounded my-[25px] disabled:cursor-not-allowed disabled:opacity-20">{buttonText}</button>

            </div>
        </div>
    )
}

export default Contact