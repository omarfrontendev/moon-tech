import styles from './hero.module.scss';
import { IoHeartSharp } from "react-icons/io5";

const TagsBar = () => {

    const tags = [
        {
            label: "iOS app design"
        },
        {
            label: "Design system"
        },
        {
            icon: true
        },
        {
            label: "58 screens"
        },
        {
            label: "Shakuro"
        }
    ]

    return (
        <div className={styles.tags_list}>{
            tags.map((tag, i) => {
                if (tag.icon) return <IoHeartSharp className={styles.heart_icon} key={i} color="#EBFF00" size={100} />
                return <button className={styles.tag_btn} key={i}>{tag.label}</button>
            })
        }</div>
    );
};

export default TagsBar;