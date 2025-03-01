'use client'

import Link from "next/link"

export default function MainPageNav() {

    const navitionList = {
        ChromeExtention: "/",
        JavaScript: "/apps",
        Automation: "/contact",
        Python: "/about"
    }

    return (

        <nav className="main_nav">
            <ul>
                {
                    Object.keys(navitionList).map((key, index) => {
                        return <Link style={{ border: "1px white solid", padding: "10px" }} href={navitionList[key]} key={index}>{key}</Link>
                    })
                }

            </ul>
        </nav>

    )
}