import {number, string} from "prop-types";

const BackgroundImage = props => {
    const {
        img,
        opacity = 1
    } = props;

    return (
        <div
            style={{backgroundImage: `url(${img})`, opacity}}
            className="fixed top-0 left-0 w-full h-full bg-cover -z-10 bg-bottom"
        />
    )
}

BackgroundImage.propTypes = {
    img: string,
    opacity: number
}

export default BackgroundImage;