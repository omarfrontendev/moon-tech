import SectionTitle from "@/components/ui/section-title";
import styles from './dream.module.scss';
import AchievementsList from "./achievements-list";
import useIsMobile from "@/hooks/useIsMobile";

const DreamBigger = () => {
    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={styles.section}>
            <SectionTitle
                subtitleStyles={{ fontSize: isMobile ? "14px" :  "20px", fontWeight: "400" }}
                titleStyles={{ fontSize: isMobile ? "37px" : isTablet ? "48px" : "56px", fontWeight: "700" }}
                classes="text-center"
                title="Dream Bigger, Achieve<br />Beyond"
                subtitle="Nourish your body, push your limits, and build a stronger, healthier you -<br />one workout and meal at a time"
            />
            <div className="mt-5">
                <AchievementsList />
            </div>
        </section>

    );
};

export default DreamBigger;