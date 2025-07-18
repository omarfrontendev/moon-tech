import SectionTitle from "@/components/ui/section-title";
import { Bolt, FontIcon } from "@/icons";
import MainButton from "@/components/ui/main-badge";
import styles from './typeography.module.scss';

const TypographyShowcase = () => (
    <section className={styles.section}>
        <SectionTitle
            classes="text-center margin-bottom-32"
            title="Typeface"
            subtitle="Select a diet , set goals , and plan<br/>workout days"
            titleStyles={{ fontSize: "53px" }}
            subtitleStyles={{ fontSize: "20px" }}
        />
        <div className={`d-flex align-items-center justify-content-center gap-2`}>
            <MainButton>
                <FontIcon />
                2 fonts
            </MainButton>
            <MainButton>
                <Bolt />
                7 styles
            </MainButton>
        </div>
        <div className={styles.headline_box}>
            <MainButton>
                Play Sans
            </MainButton>
            <h3 className={styles.headline_title}>
                Heading
            </h3>
        </div>
        <div className={styles.hubot_sans}>
            <div className="container">
                <div className={`d-flex align-items-center`}>
                    <MainButton>Hubot Sans</MainButton>
                    <p className={styles.hubot_text}>Nourish your body, push your limits, and build a stronger, healthier you one workout and meal at a time</p>
                </div>
            </div>
        </div>
        <img className={styles.section_image} src="/assets/typeography.svg" alt="image" />
    </section>
);

export default TypographyShowcase;