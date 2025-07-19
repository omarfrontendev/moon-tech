import MainButton from "@/components/ui/main-badge";
import styles from './typeography.module.scss';

const HeadingBox = () => (
    <div className={styles.headline_box} id="headline-box">
        <MainButton id="headline-btn">
            Play Sans
        </MainButton>
        <h3 id="headline-title" className={styles.headline_title}>
            Heading
        </h3>
    </div>
);

export default HeadingBox;