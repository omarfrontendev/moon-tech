import styles  from './badge.module.scss';

const MainButton = ({ children, id }) => (
    <div className={styles.badge} id={id}>{children}</div>
);

export default MainButton;