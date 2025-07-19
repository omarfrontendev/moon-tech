import SectionTitle from "@/components/ui/section-title";
import { Bolt, FontIcon } from "@/icons";
import MainButton from "@/components/ui/main-badge";
import styles from './typeography.module.scss';
import useIsMobile from "@/hooks/useIsMobile";
import HeadingBox from "./heading-box";
import HubotSansBox from "./hubot-sans-box";

const TypographyShowcase = () => {

    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={styles.section}>
            <SectionTitle
                classes="text-center"
                title="Typeface"
                subtitle="Select a diet , set goals , and plan<br/>workout days"
                titleStyles={{ fontSize: isMobile ? "55px" : "53px" }}
                subtitleStyles={{ fontSize: "20px", margin: "32px 0" }}
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
            <HeadingBox />
            <HubotSansBox />
            <img className={styles.section_image} src="/assets/typeography.svg" alt="image" />
        </section>
    )
}

export default TypographyShowcase;