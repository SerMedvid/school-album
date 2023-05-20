"use client"

import {useState} from "react";
import PageNextIcon from '@rsuite/icons/PageNext';
import {useMotionValueEvent, useScroll, motion} from "framer-motion";

const variants = {
    "visible": {opacity: 1, y: 0},
    "hidden": {opacity: 0, y: 100}
}

const BackToTopButton = () => {
    const { scrollY   } = useScroll()
    const [visible, setVisible] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 200)
    })

    const onClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
            <motion.button
                title="Догори"
                className="fixed bottom-8 right-8 text-4xl rounded-full bg-white  w-14 h-14 text-black"
                initial={false}
                onClick={onClick}
                variants={variants}
                animate={visible ? 'visible' : 'hidden'}
            >
            <div className="-rotate-90 flex justify-center items-center">
                <PageNextIcon />
            </div>
        </motion.button>
    )
}

export default BackToTopButton