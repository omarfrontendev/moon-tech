import AchievementCard from './achievement-card';
import styles from './dream.module.scss';

const AchievementsList = () => {

    const achievementsList = [
        {
            col: "col-3",
            label: "Diet Selection"
        },
        {
            col: "col-3",
            label: "Fitness Goals"
        },
        {
            col: "col-6",
            src: "/assets/cubes.svg"
        },
        {
            col: "col-3",
            src: "/assets/achiev_2.svg"
        },
        {
            col: "col-6",
            label: "App Screens",
            className: styles.app_screen,
            src: "/assets/app-screens.svg",
            count: 58,
        },
        {
            col: "col-3",
            label: "Over 310 Icons <br /> Designed"
        },
        {
            col: "col-6",
            label: "Illustrations Used",
            className: styles.illustration,
            count: 127,
        },
        {
            col: "col-3",
            label: "Training <br/> Days <br />Selection"
        },
        {
            col: "col-3",
            src: "/assets/dollar.svg"
        },
    ];

    return (
        <div className="row g-3">
            {achievementsList.map((achievement, i) => (
                <div className={`${achievement.col}`} key={i}>
                    <AchievementCard {...achievement} />
                    {/* {achievement?.count ? (
                        <div className={`${styles.card} ${achievement.class} d-flex align-items-end justify-content-between`}>
                            <div>
                                <span className={styles.count}>{achievement.count}</span>
                                <p className={styles.count_label}>{achievement.label}</p>
                            </div>
                            {achievement?.src && <img src={achievement?.src} alt="image" />}
                        </div>
                    ) : achievement?.src ? (
                        <img src={achievement?.src} alt="image" />
                    ) : (
                        <div className={`${styles.card}`}>
                            {achievement.label && <p
                                dangerouslySetInnerHTML={{ __html: achievement.label }}
                            />}
                        </div>
                    )} */}
                </div>
            ))}
        </div>
    );
};
export default AchievementsList