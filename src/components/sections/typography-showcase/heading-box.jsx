import MainButton from "@/components/ui/main-badge";
import styles from './typeography.module.scss';

const HeadingBox = () => (
    <div className={styles.headline_box}>
        <MainButton>
            Play Sans
        </MainButton>
        <h3 className={styles.headline_title}>
            Heading
        </h3>
    </div>
);

export default HeadingBox;