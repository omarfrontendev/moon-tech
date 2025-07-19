import styles from './palette.module.scss';
import PeletteCard from './pelette-card';

const PaletteList = () => {

    const list = [
        {
            label: "Lime Light",
            code: "EFFD01",
            bgColor: "#EBFF00"
        },
        {
            label: "Coral Reef",
            code: "FF6F61",
            bgColor: "#0B1521"
        },
        {
            label: "Ocean Blue",
            code: "0077BE",
            bgColor: "#4224FF"
        },
        {
            label: "Sunset Orange",
            code: "FF5A00",
            bgColor: "#141922"
        },
    ]

    return <div className={`${styles.list} d-flex justify-content-end`}>
        {list.map(color => (
            <PeletteCard key={color.code} {...color} />
        ))}
    </div>
};

export default PaletteList;