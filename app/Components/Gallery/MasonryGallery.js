"use client"

import GalleryItem from "@/app/Components/GalleryItem/GalleryItem";
import {array, bool} from "prop-types";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import classes from "./masonry.module.css";


const MasonryGallery = props => {
    const {
        items = [],
        ...itemsProps
    } = props

    if (!items.length) {
        return (
            <h2>Не переживайте, очікуємо контент!</h2>
        )
    }

    return (
        <div className="mb-24">
            <ResponsiveMasonry
                columnsCountBreakPoints={{300: 1, 480: 2, 1024: 3}}
            >
                <Masonry gutter="2rem" className={classes.root}>
                    {items.map((item) => (
                        <GalleryItem
                            headline={item.headline}
                            img={item.img}
                            text={item.text}
                            alt={item.alt}
                            key={item.id}
                            priority={item.priority}
                            {...itemsProps}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

MasonryGallery.propTypes = {
    items: array,
    withModal: bool
}

export default MasonryGallery;