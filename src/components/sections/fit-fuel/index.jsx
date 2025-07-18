import SectionTitle from '@/components/ui/section-title';
import styles from './fit-fuel.module.scss';
import Image from 'next/image';
import MainButton from '@/components/ui/main-badge';
import { MaskIcon, SupportIcon } from '@/icons';

const FitFuelSection = () => (
    <section className={`${styles.section} d-flex align-items-center justify-content-between`}>
        <Image
            src="/assets/fit-fuel.svg"
            alt="image"
            width={768}
            height={724}
            priority
        />
        <div>
            <div className='d-flex'>
                <SectionTitle
                    titleStyles={{ fontSize: "74px", fontWeight: "700", color: "#CFCFCF" }}
                    subtitleStyles={{ fontSize: "20.5px", fontWeight: "400x" }}
                    title="Fit &<br /> Fuelled"
                    subtitle="Your ultimate fitness and nutrition <br />companion. Track, train, and transform <br />with expert guidance every step"
                />
                <Image
                    src="/assets/bolt.svg"
                    alt="image"
                    width={123}
                    height={178}
                    priority
                />
            </div>
            <div className='d-flex align-items-center gap-2 mt-4'>
                <MainButton><SupportIcon /> ios support</MainButton>
                <MainButton><MaskIcon />Web adaptive</MainButton>
            </div>
        </div>
    </section>
);

export default FitFuelSection;