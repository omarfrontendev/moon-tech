import SectionTitle from "@/components/ui/section-title";
import MainButton from "@/components/ui/main-badge";
import styles from './workout.module.scss';
import { PlayIcon } from "@/icons";
import Image from "next/image";

const Workout = () => (
    <section className={`d-flex gap-4 align-items-center justify-content-between`}>
        <div className="padding-left-64">
            <SectionTitle
                titleStyles={{ fontSize: "84px" }}
                subtitleStyles={{ fontSize: "20px" }}
                title="workout<br />spaces"
                subtitle="Select a diet , set goals , and plan<br />workout days"
            />
            <div className={styles.Workout_btn}>
                <MainButton><PlayIcon />120+ categories</MainButton>
            </div>
        </div>
        <div className="position-relative">
            <div className={styles.plus}></div>
            <Image
                src="/assets/workout.svg"
                alt="image"
                width={914}
                height={861}
                priority
            />
        </div>
    </section>
);

export default Workout;