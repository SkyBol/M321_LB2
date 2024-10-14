import styles from './Menu.module.css';
import logo from "../../../assets/img/liquor/logo_1.png";
import { NavbarItem } from './Navbar';

interface DesktopNavbarProps {
    items: NavbarItem[];
    handleClick: (tab: string) => void;
    activeTab: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({items, handleClick, activeTab}) => {
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
        </nav>
    );
};

export default DesktopNavbar;
