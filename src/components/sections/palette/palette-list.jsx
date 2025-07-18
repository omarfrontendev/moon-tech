import styles from './palette.module.scss';

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

    return <div className={`${styles.list} d-flex`}>
        {list.map(color => (
            <div key={color.code} className={styles.color_card} style={{ backgroundColor: `${color.bgColor}` }} >
                <p className={styles.color_label}>{color.label}</p>
                <p className={styles.color_code}>{color.code}</p>
            </div>
        ))}
    </div>
};

export default PaletteList;