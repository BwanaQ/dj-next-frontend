"use client"

import { useRouter } from "next/navigation"
const LOGIN_URL = "/api/login/"


export default function Page() {
    const router = useRouter()
    async function handleSubmit (event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm)
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        }
        const response = await fetch(LOGIN_URL, requestOptions)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            console.log("logged in")
            router.replace("/")
            
        }
    }
    return <div className="h-[95vh]">
        <div className='max-w-md mx-auto py-5'>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' required name='username' placeholder='Your Username' />
                <input type='password' required name='password' placeholder='Your password' />

                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
}