'use client'
import { useRouter } from "next/navigation"

export default function login(params) {
    const router= useRouter()
    
    return (
        <div>
            this is login page
            <button onClick={()=>router.push("/")}> go to login page</button>
        </div>
    )
}