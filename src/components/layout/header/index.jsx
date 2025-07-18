import Image from 'next/image';
import { Bolt } from '@/icons';
import styles from './header.module.scss';

const Header = () => {
    return (
        <nav className={`${styles.header}`}>
            <div className='d-flex align-items-center justify-content-between'>
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    className={styles.logo}
                    width={182}
                    height={48}
                    priority
                />
                <button className={`${styles.header_btn} d-flex align-items-center`}><Bolt /> Get it now</button>
            </div>
        </nav>
    );
};

export default Header;