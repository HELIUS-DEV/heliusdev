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
                        return <Link href={navitionList[key]} key={index}>{key}</Link>
                    })
                }

            </ul>
        </nav>

    )
}