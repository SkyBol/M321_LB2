import { NavbarItem } from "./Navbar";
import logo from "../../../assets/img/liquor/logo_1.png";
import styles from './Menu.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

interface MobileNavbarProps {
    items: NavbarItem[];
    handleClick: (tab: string) => void;
    activeTab: string;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({items, handleClick, activeTab}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const DrinkDomainLogo = (
        <>
            <img src={logo} style={{width:"3vw", minWidth:"40px"}} alt="Logo"/>
            <span
                className={`${styles.navItem} ${activeTab === "home" ? styles.active : ''}`}
                onClick={() => handleClick("home")}
            >
                <div className={styles.tab}>DrinkDomain</div>
            </span>
        </>
    );

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                backgroundImage: "linear-gradient(90deg, rgb(20,20,20) 15%, rgb(15,15,15) 50%, rgb(10,10,10) 85%)",
                height: "100%",
                width: "250px",
                color: "rgba(255, 255, 255, 0.6)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    borderBottom: "1px solid rgb(255, 215, 0, 0.7)",
                }}
            >
                {DrinkDomainLogo}
            </Box>
            <List>
                {items.map((item) => (
                    <ListItemButton key={item.name} onClick={() => handleClick(item.name)}>
                        <ListItemText
                            primary={item.display}
                            sx={{
                                color: item.name === activeTab ? "rgb(255, 215, 0, 0.7)" : "rgba(255, 255, 255, 0.6)"
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <nav className={styles.menu}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, marginLeft: "10px" }}
                >
                    <MenuIcon />
                </IconButton>
                {
                    !drawerOpen && DrinkDomainLogo
                }
            </nav>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default MobileNavbar;