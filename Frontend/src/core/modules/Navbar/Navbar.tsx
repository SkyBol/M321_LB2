import { AppBar, Box, useMediaQuery, useTheme } from '@mui/material';
import DesktopNavbar from './DesktopNavbar'; 
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

export interface NavbarItem {
    name: string;
    display: string;
    path: string;
    icon: string;
}

const NavbarItems: NavbarItem[] = [
    {
        name: "home",
        display: "Home",
        path: "/",
        icon: "home",
    },
    {
        name: "bar",
        display: "Bar",
        path: "/bottles",
        icon: "search",
    },
    {
        name: "guestBook",
        display: "Guestbook",
        path: "/guestBook",
        icon: "bell",
    },
    {
        name: "cocktail",
        display: "Cocktail",
        path: "/cocktail",
        icon: "bell",
    },
    {
        name: "addBottle",
        display: "Add Bottle",
        path: "/bottles/add",
        icon: "star",
    },
    {
        name: "logout",
        display: "Logout",
        path: "/login",
        icon: "bell",
    },
]

export default function SearchAppBar() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>('');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is mobile

    useEffect(() => {
        const newPath = NavbarItems.find((item) => item.name === activeTab)?.path;
        if (newPath) {
            navigate(newPath);
        }
    }, [activeTab]);

    return (
        <Box 
            sx={{ 
                width: '100%',
                overflowX: 'hidden',
                position: 'relative',
                zIndex: 1100 
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    top: 0,
                    left: 0,
                    right: 0
                }} 
            >
                {
                    isMobile
                    ? <MobileNavbar
                        items={NavbarItems}
                        handleClick={setActiveTab}
                        activeTab={activeTab}
                    />
                    : <DesktopNavbar
                        items={NavbarItems}
                        handleClick={setActiveTab}
                        activeTab={activeTab}
                    />
                }
            </AppBar>
        </Box>
    );
}
