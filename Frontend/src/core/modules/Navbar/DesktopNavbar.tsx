import styles from './Menu.module.css';
import logo from "../../../assets/img/liquor/logo_1.png";
import { NavbarItem } from './Navbar';

interface DesktopNavbarProps {
    items: NavbarItem[];
    handleClick: (tab: string) => void;
    activeTab: string;
    isLoggedIn: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({items, handleClick, activeTab, isLoggedIn}) => {
    return (
        <nav className={styles.menu}>
            <img src={logo} style={{width:"3vw", minWidth:"40px"}} alt="Logo"/>
            {
                items.map((navItem) => (
                    <span
                        className={`${styles.navItem} ${activeTab === navItem.name ? styles.active : ''}`}
                        onClick={() => handleClick(navItem.name)}
                    >
                        <span className={styles.icon}>
                            <i data-feather={navItem.icon}></i>
                        </span>
                        <div className={styles.tab}>{navItem.display}</div>
                    </span>
                ))
            }
            <span
                className={`${styles.navItem}`}
                onClick={() => handleClick("sign")}
            >
                <span className={styles.icon}>
                    <i data-feather={"bell"}></i>
                </span>
                <div className={styles.tab}>{isLoggedIn ? 'Logout' : 'Login'}</div>
            </span>
        </nav>
    );
};

export default DesktopNavbar;
