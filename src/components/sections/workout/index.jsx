"use client";

import SectionTitle from "@/components/ui/section-title";
import MainButton from "@/components/ui/main-badge";
import styles from './workout.module.scss';
import { PlayIcon } from "@/icons";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { useGSAP } from "@gsap/react";
import { animation } from "./animations";

const Workout = () => {

    const isTablet = useIsMobile(991);
    const isMobile = useIsMobile();

    useGSAP(() => {
        isMobile !== null && animation();
    }, [isMobile]);

    if (isMobile === null) return null;

    return (
        <section id="workout-section" className={`d-flex gap-5 flex-column flex-md-row align-items-start align-items-md-center justify-content-between`}>
            <div className="padding-left-64">
                <SectionTitle
                    id="workout-title"
                    titleStyles={{ fontSize: isMobile ? "56px" : isTablet ? "64px" : "84px" }}
                    subtitleStyles={{ fontSize: isMobile ? "14px" : isTablet ? "16px" : "20px" }}
                    title="workout<br />spaces"
                    subtitle="Select a diet , set goals , and plan<br />workout days"
                />
                <div className={styles.Workout_btn}>
                    <MainButton id="workout-btn">
                        <PlayIcon />120+ categories
                    </MainButton>
                </div>
            </div>
            <div className="w-100 w-md-auto w-md-auto d-flex justify-content-center justify-content-md-end">
                <div id="workout-image" className={`${styles.image_box} position-relative`}>
                    <div className={styles.plus} id="plus-icon"></div>
                    <Image
                        className={styles.image}
                        src="/assets/workout.svg"
                        alt="image"
                        width={914}
                        height={861}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Workout;