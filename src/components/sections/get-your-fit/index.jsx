import SectionTitle from "@/components/ui/section-title";
import MainButton from "@/components/ui/main-badge";
import { ScenarioIcon } from "@/icons";
import Image from "next/image";
import styles from './fit.module.scss';
import { useMediaQuery } from "react-responsive";

const GetYourFit = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className="mb-3">
            <div className={`${styles.section} main_container mb-5 d-flex flex-column flex-md-row gap-4 justify-content-between`}>
                <SectionTitle
                    titleStyles={{ fontSize: isMobile ? "56px" : "" }}
                    subtitleStyles={{ fontSize: isMobile ? "16px" : "" }}
                    title="Get your fit"
                    subtitle="Select a diet , set goals , and plan <br/> workout days"
                />
                <MainButton>
                    <ScenarioIcon />
                    13 scenarios
                </MainButton>
            </div>

            <div className={`${styles.image_box} main_container`}>
                <Image
                    src="/assets/get-ur-fit.svg"
                    alt="image"
                    width={1280}
                    height={875}
                    priority
                />
            </div>
        </section>
    );
};

export default GetYourFit;