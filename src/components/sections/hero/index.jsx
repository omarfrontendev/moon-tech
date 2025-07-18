import Image from 'next/image';
import styles from './hero.module.scss';
import TagsBar from './tagsBar';

const Hero = () => (
    <>
        <section className={`${styles.hero_section} d-flex align-items-center`}>
            <div className={`${styles.hero_content} position-relative d-flex align-items-center justify-content-between`}>
                <p className={styles.hero_text}>Unlock potential, go further</p>
                <h1 className={styles.hero_title}>
                    <Image
                        className={styles.icon}
                        src="/assets/hero_icon.svg"
                        alt="hero_icon"
                        priority
                        width={78}
                        height={78}
                    />
                    <span className={styles.muted}>Fit</span><br />Guide
                </h1>
                <div className={`${styles.hero_img}`}>
                    <Image
                        src="/assets/hero-img.svg"
                        alt="hero_image"
                        width={494}
                        height={683}
                        priority
                    />
                </div>
            </div>
        </section>
        <TagsBar />
    </>
);

export default Hero;