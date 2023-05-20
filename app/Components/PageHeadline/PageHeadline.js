const PageHeadline = props => {
    const {children} = props;

    return (
        <h1 className="text-4xl lg:text-5xl mt-8 mb-12">{children}</h1>

    )
}

export default PageHeadline