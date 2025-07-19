import MainButton from "@/components/ui/main-badge";
import styles from './typeography.module.scss';

const HubotSansBox = () => (
    <div className={styles.hubot_sans}>
        <div id="hubot-sans-box" className={`d-flex flex-column flex-md-row align-items-md-center align-items-start`}>
            <MainButton>Hubot Sans</MainButton>
            <p className={styles.hubot_text}>Nourish your body, push your limits, and build a stronger, healthier you one workout and meal at a time</p>
        </div>
    </div>
);

export default HubotSansBox;