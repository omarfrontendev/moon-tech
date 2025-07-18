import SectionTitle from "@/components/ui/section-title";
import styles from './dream.module.scss';
import AchievementsList from "./achievements-list";

const DreamBigger = () => (
    <section className={styles.section}>
        <SectionTitle
            subtitleStyles={{ fontSize: "20px", fontWeight: "400" }}
            titleStyles={{ fontSize: "56px", fontWeight: "700" }}
            classes="text-center"
            title="Dream Bigger, Achieve<br />Beyond"
            subtitle="Nourish your body, push your limits, and build a stronger, healthier you -<br />one workout and meal at a time"
        />
        <div className="mt-5">
            <AchievementsList />
        </div>
    </section>
);

export default DreamBigger;