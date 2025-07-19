import styles from './guide.module.scss';

const Shapes = () => (
    <div className={styles.shapes}>
        <div className="d-flex" id="shape">
            <div className={styles.semicircle}></div>
        </div>
        <div className="d-flex" id="shape">
            <div className={styles.square}></div>
        </div>
        <div className="d-flex" id="shape">
            <div className={styles.plus}></div>
        </div>
    </div>
);

export default Shapes;