import SectionTitle from "@/components/ui/section-title";
import styles from './guide.module.scss';
import useIsMobile from "@/hooks/useIsMobile";
import Shapes from "./shapes";

const FitGuide = () => {

    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    if (isMobile === null) return null;
    return (
        <section className={styles.section}>
            <Shapes />
            <SectionTitle
                classes="text-center"
                titleStyles={{ fontSize: isMobile ? "32px" : isTablet ? "48px" : "53px" }}
                subtitleStyles={{ fontSize: isMobile ? "14px" : isTablet ? "16px" : "20px" }}
                title="fitGuide: smarter <br /> Approach to Health"
                subtitle="Select a diet , set goals , and plan <br /> workout days"
            />
        </section>
    );
};

export default FitGuide;