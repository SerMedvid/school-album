"use client"

import {motion} from "framer-motion";

const GalleryItemDescription = props => {
    const {text, canDisplay} = props;

    if (!text) {
        return null
    }

    return (
        <motion.p
            className="text-sm md:text-xs lg:text-sm pt-1 relative pl-2 after:w-1 after:h-full after:bg-white after:rounded after:absolute after:left-0 after:top-0"
            animate={
                canDisplay ? {height: 'auto', opacity: 1} : {height: 0, opacity: 0}
            }
            dangerouslySetInnerHTML={{__html: text}}
        />
    )
}

export default GalleryItemDescription