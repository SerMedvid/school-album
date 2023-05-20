"use client"

import Link from "next/link";
import Nav from "@/app/Components/Header/Nav";
import {useMotionValueEvent, useScroll, motion} from "framer-motion";
import {useState} from "react";

const Header = props => {
    const { scrollY } = useScroll()
    const [backgroundColor, setBackgroundColor] = useState('rgba(0,0,0,0)')

    useMotionValueEvent(scrollY, "change", (latest) => {
        setBackgroundColor(`rgba(0,0,0,${Math.min(0.8, latest/100)})`)
    })

    return (
        <motion.header
            style={{backgroundColor}}
            className="flex top-0 justify-between	px-6 py-4 sticky w-full z-20 items-center"
        >
            <span className="font-bold text-4xl">
                <Link title="9В клас" href="/">9В</Link>
            </span>
            <Nav />
        </motion.header>
    )
}

export default Header