import SectionTitle from '@/components/ui/section-title';
import styles from './fit-fuel.module.scss';
import Image from 'next/image';
import MainButton from '@/components/ui/main-badge';
import { MaskIcon, SupportIcon } from '@/icons';
import useIsMobile from '@/hooks/useIsMobile';

const FitFuelSection = () => {

    const islaptop = useIsMobile(1199);
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={`${styles.section} d-flex flex-column-reverse flex-xl-row align-items-start align-items-xl-center justify-content-between gap-3`}>
            <div className={styles.image}>
                <Image
                    src="/assets/fit-fuel.svg"
                    alt="image"
                    height={0}
                    width={0}
                    priority
                    sizes="auto"
                    style={{ width: "fit-content", height: "auto" }}
                />
            </div>
            <div className={`${styles.title} d-flex flex-column align-items-xl-center`}>
                <div className='d-flex'>
                    <SectionTitle
                        titleStyles={{ fontSize: isMobile ? "68px" : islaptop ? "64px" :  "74px", fontWeight: "700", color: "#CFCFCF" }}
                        subtitleStyles={{ fontSize: isMobile ? "14px" : islaptop ? "18px" : "20.5px", fontWeight: "400x" }}
                        title="Fit &<br /> Fuelled"
                        subtitle="Your ultimate fitness and nutrition <br />companion. Track, train, and transform <br />with expert guidance every step"
                    />
                    <Image
                        className={styles.bolt_icon}
                        src="/assets/bolt.svg"
                        alt="image"
                        width={123}
                        height={178}
                        priority
                    />
                </div>
                <div className='d-flex flex-wrap flex-column flex-md-row align-items-start align-items-md-center gap-2 mt-4'>
                    <MainButton><SupportIcon /> ios support</MainButton>
                    <MainButton><MaskIcon />Web adaptive</MainButton>
                </div>
            </div>
        </section>
    )
}

export default FitFuelSection;