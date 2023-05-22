import GalleryItem from "@/app/Components/GalleryItem/GalleryItem";
import {array, bool, string} from "prop-types";

const Gallery = props => {
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
        <ul
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-12 md:gap-y-16 lg:gap-y-18 mb-24"
        >
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
        </ul>
    )
}

Gallery.propTypes = {
    items: array,
    withModal: bool,
    aspectRatio: string
}

export default Gallery;