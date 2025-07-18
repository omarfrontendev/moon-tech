import SectionTitle from "@/components/ui/section-title";
import styles from './tracking.module.scss';
import Image from "next/image";

const Tracking = () => (
    <section className={styles.section}>
        <SectionTitle
            titleStyles={{ fontSize: "56px", fontWeight: "700" }}
            subtitleStyles={{ fontSize: "20px", fontWeight: "400" }}
            classes="text-center"
            title="Tracking & Progress"
            subtitle="Nourish your body, push your limits, and build a stronger, healthier you -<br /> one workout and meal at a time"
        />
        <div className={`${styles.image_box} main_container margin-top-80`}>
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
export default Tracking;