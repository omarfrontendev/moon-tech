import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={`text-center mt-3 ${styles.footer}`}>
            <p className={styles.text}>Have an idea? We can help</p>
            <h4 className={styles.title}>Start Your Project</h4>
            <div className='d-flex align-items-center justify-content-center gap-2'>
                <a href="#" className={styles.link}>Dribbble</a>
                <a href="#" className={styles.link}>Website</a>
                <a href="#" className={styles.link}>Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;