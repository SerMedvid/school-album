"use client"

import {useState} from "react";
import Image from "next/image";
import {Modal} from "rsuite";
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import GalleryItemDescription from "@/app/Components/GalleryItem/GalleryItemDescription";
import {bool, object, oneOfType, string} from "prop-types";
import classes from "./gallery-item.module.css";

const GalleryItem = props => {
    const {
        img = '/bg_placeholder.jpg',
        alt,
        headline,
        text,
        withModal,
        aspectRatio = 1,
        auraColor = 'rgba(255,255,255,0.7)'
    } = props;

    const [open, setOpen] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    return (
        <>
            <figure
                className={`
                ${classes.root} rounded-md overflow-hidden shadow-md relative hover:scale-[1.01] origin-bottom duration-300 cursor-pointer`}
                style={{
                    '--tw-shadow-color': auraColor
                }}
                onClick={() => setOpen(true)}
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
            >
                {
                    withModal &&
                    <span                              title="Збільшити"
                    >
                         <ExpandOutlineIcon
                             className="absolute top-2 right-2 text-2xl"
                         />
                    </span>
                }
                {
                    typeof img === 'string' ?
                        <Image
                            className="object-cover"
                            src={img}
                            alt={alt || headline}
                            width={400}
                            height={400 / aspectRatio}
                            style={{aspectRatio}}
                        /> :
                        <Image
                            src={img}
                            alt={alt || headline}
                        />
                }

                <figcaption className={`${classes.caption} absolute bottom-0 w-full p-2`}>
                    {
                        !!headline &&
                        <h3 className="text-xl md:text-lg lg:text-xl">{headline}</h3>
                    }
                    <GalleryItemDescription text={text} canDisplay={isHovering} />
                </figcaption>
            </figure>
            {
                withModal &&
                <Modal
                    size="lg"
                    open={open}
                    onClose={() => setOpen(false)}
                    className={classes.modal}
                >
                    <Modal.Header>
                        <Modal.Title>{headline}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image
                            className="object-contain max-h-[600px]"
                            src={img}
                            alt={alt || headline}
                            width={1000}
                            height={1000}
                        />
                    </Modal.Body>
                </Modal>
            }
        </>

    )
}


GalleryItem.propTypes = {
    img: oneOfType([string, object]) ,
    alt: string,
    headline: string,
    text: string,
    withModal: bool,
    auraColor: string,
    aspectRatio: string
}

export default GalleryItem;