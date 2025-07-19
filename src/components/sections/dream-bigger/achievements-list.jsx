import AchievementCard from './achievement-card';
import styles from './dream.module.scss';

const AchievementsList = () => {

    const achievementsList = [
        {
            col: "col-6 col-md-3 order-1 order-md-0",
            label: "Diet Selection"
        },
        {
            col: "col-6 col-md-3 order-2 order-md-0",
            label: "Fitness Goals"
        },
        {
            col: "col-12 col-md-6 order-3 order-md-0",
            src: "/assets/cubes.svg"
        },
        {
            col: "col-6 col-md-3 order-5 order-md-0",
            src: "/assets/achiev_2.svg"
        },
        {
            col: "col-12 col-md-6 order-4 order-md-0",
            label: "App Screens",
            className: styles.app_screen,
            src: "/assets/app-screens.svg",
            count: 58,
        },
        {
            col: "col-6 col-md-3 order-5 order-md-0",
            label: "Over 310 Icons <br /> Designed"
        },
        {
            col: "col-12 col-md-6 order-5 order-md-0",
            label: "Illustrations Used",
            className: styles.illustration,
            count: 127,
        },
        {
            col: "col-6 col-md-3 order-5 order-md-0",
            label: "Training <br/> Days <br />Selection"
        },
        {
            col: "col-6 col-md-3 order-5 order-md-0",
            src: "/assets/dollar.svg"
        },
    ];

    return (
        <div className="row g-3">
            {achievementsList.map((achievement, i) => (
                <div className={`${achievement.col}`} id="achievements-row" key={i}>
                    <AchievementCard {...achievement} />
                </div>
            ))}
        </div>
    );
};
export default AchievementsList