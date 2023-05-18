const BackgroundImage = props => {
    const {img} = props;

    return (
        <div
            style={{backgroundImage: `url(${img})`}}
            className="fixed top-0 left-0 w-full h-full bg-cover -z-10 bg-bottom"
        />
    )
}

export default BackgroundImage;