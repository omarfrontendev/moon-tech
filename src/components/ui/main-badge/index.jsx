import styles  from './badge.module.scss';

const MainButton = ({ children }) => (
    <div className={styles.badge}>{children}</div>
);

export default MainButton;