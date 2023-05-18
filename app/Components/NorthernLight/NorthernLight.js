import classes from "./northern-light.module.css";

const NorthernLight = props => {
    const aurs = Array
        .from(Array(10))
        .map((item, idx) => <span key={idx} className={`aur aur_${idx + 1}`} />)

    return (
        <div className="overflow-hidden w-full absolute px-4 pt-16 pb-48 left-0 top-0 pointer-events-none">
            <div className={classes.aur_cont}>
                {aurs}
            </div>
        </div>
    )
}

export default NorthernLight;