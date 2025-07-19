'use client';

import SectionTitle from "@/components/ui/section-title";
import MainButton from "@/components/ui/main-badge";
import { ScenarioIcon } from "@/icons";
import Image from "next/image";
import styles from './fit.module.scss';
import useIsMobile from "@/hooks/useIsMobile";

const GetYourFit = () => {

    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section>
            <div className={`${styles.section} main_container mb-5 d-flex flex-column flex-md-row gap-5 justify-content-between`}>
                <SectionTitle
                    titleStyles={{ fontSize: isMobile ? "56px" : isTablet ? "62px" : "" }}
                    subtitleStyles={{ fontSize: isMobile ? "16px" : isTablet ? "20px" : "" }}
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