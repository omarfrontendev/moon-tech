import Image from 'next/image';
import { Bolt } from '@/icons';
import styles from './header.module.scss';

const Header = () => {
    return (
        <nav className={`${styles.header}`}>
            <div className='d-flex align-items-center justify-content-between'>
                <Image
                    id="logo"
                    src="/assets/logo.svg"
                    alt="logo"
                    width={0}
                    height={0}
                    priority
                    sizes="(max-width: 767px) 120px, 182px"
                    className={styles.logo}
                />
                <button id="header-btn" className={`${styles.header_btn} d-flex align-items-center`}><Bolt /> Get it now</button>
            </div>
        </nav>
    );
};

export default Header;