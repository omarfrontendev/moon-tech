import Image from 'next/image';
import styles from './hero.module.scss';
import TagsBar from './tagsBar';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { animation } from './animations';

const Hero = () => {

    useGSAP(() => {
        animation();
    }, []);

    return (
        <>
            <section id="hero-section" className={`${styles.hero_section} d-flex align-items-center`}>
                <div className={`${styles.hero_content} position-relative gap-0 gap-md-5 d-flex align-items-center justify-content-between`}>
                    <p className={styles.hero_text} id="hero-text">Unlock potential, go further</p>
                    <h1 className={styles.hero_title} id="hero-title">
                        <Image
                            id="title-icon"
                            className={styles.icon}
                            src="/assets/hero_icon.svg"
                            alt="hero_icon"
                            priority
                            width={78}
                            height={78}
                        />
                        <span className={styles.muted}>Fit</span><br />Guide
                    </h1>
                    <div className={`${styles.hero_img}`} id="hero-image">
                        <Image
                            src="/assets/hero-img.svg"
                            alt="Landing Hero"
                            height={0}
                            width={0}
                            priority
                            sizes="auto"
                            style={{ width: "fit-content", height: "auto" }}
                        />
                    </div>
                </div>
            </section>
            <TagsBar />
        </>
    );
}

export default Hero;