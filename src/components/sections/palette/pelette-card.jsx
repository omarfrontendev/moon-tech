import styles from './palette.module.scss';

const PeletteCard = ({ code, bgColor, label}) => (
    <div className={styles.color_card} style={{ backgroundColor: `${bgColor}` }} >
        <p className={styles.color_label}>{label}</p>
        <p className={styles.color_code}>{code}</p>
    </div>
);

export default PeletteCard;