import SectionTitle from "@/components/ui/section-title";
import styles from './tracking.module.scss';
import Image from "next/image";
import { animation } from "./animations";
import { useGSAP } from "@gsap/react";
import useIsMobile from "@/hooks/useIsMobile";

const Tracking = () => {

    const isMobile = useIsMobile();

    useGSAP(() => {
        isMobile !== null && animation();
    }, [isMobile]);

    return (
        <section className={`${styles.section} overflow-hidden`} id='tracking-section'>
            <SectionTitle
                id="tracking-title"
                titleStyles={{ fontSize: "56px", fontWeight: "700" }}
                subtitleStyles={{ fontSize: "20px", fontWeight: "400" }}
                classes="text-center"
                title="Tracking & Progress"
                subtitle="Nourish your body, push your limits, and build a stronger, healthier you -<br /> one workout and meal at a time"
            />
            <div className={`${styles.image_box} main_container margin-top-80`} id="tracking-image">
                <Image
                    src="/assets/tracking.svg"
                    alt="image"
                    width={1305}
                    height={850}
                    priority
                />
            </div>
        </section>

    );
};
export default Tracking;