import SectionTitle from "@/components/ui/section-title";
import styles from './guide.module.scss';
import useIsMobile from "@/hooks/useIsMobile";

const FitGuide = () => {

    const isMobile = useIsMobile();

    if (isMobile === null) return null;
    return (
        <section className={styles.section}>
            <div className="">
                <div className={styles.shapes}>
                    <div className="d-flex">
                        <div className={styles.semicircle}></div>
                    </div>
                    <div className="d-flex">
                        <div className={styles.square}></div>
                    </div>
                    <div className="d-flex">
                        <div className={styles.plus}></div>
                    </div>
                </div>
                <SectionTitle
                    classes="text-center"
                    titleStyles={{ fontSize: isMobile ? "32px" : "53px" }}
                    subtitleStyles={{ fontSize: isMobile ? "14px" : "20px" }}
                    title="fitGuide: smarter <br /> Approach to Health"
                    subtitle="Select a diet , set goals , and plan <br /> workout days"
                />
            </div>
        </section>
    );
};

export default FitGuide;