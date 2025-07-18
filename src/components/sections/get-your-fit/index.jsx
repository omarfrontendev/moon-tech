'use client';

import SectionTitle from "@/components/ui/section-title";
import MainButton from "@/components/ui/main-badge";
import { ScenarioIcon } from "@/icons";
import Image from "next/image";
import styles from './fit.module.scss';
import useIsMobile from "@/hooks/useIsMobile";
import { useGSAP } from "@gsap/react";
import { animation } from "./animations";

const GetYourFit = () => {

    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    useGSAP(() => {
        isMobile !== null && animation();
    }, [isMobile]);

    if (isMobile === null) return null;

    return (
        <section id="get-your-fit-section" className="overflow-hidden">
            <div className={`${styles.section} main_container mb-5 d-flex flex-column flex-md-row gap-5 justify-content-between`}>
                <SectionTitle
                    id="get-fit-text"
                    titleStyles={{ fontSize: isMobile ? "56px" : isTablet ? "62px" : "" }}
                    subtitleStyles={{ fontSize: isMobile ? "16px" : isTablet ? "20px" : "" }}
                    title="Get your fit"
                    subtitle="Select a diet , set goals , and plan <br/> workout days"
                />
                <MainButton id="scenarios-btn">
                    <ScenarioIcon />
                    13 scenarios
                </MainButton>
            </div>

            <div className={`${styles.image_box} main_container`}>
                <Image
                    id="git-fit-image"
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