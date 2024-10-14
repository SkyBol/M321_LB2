import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";

type MenuProps ={
    handleClick:(status:boolean)=> void;
    handleClose:(status:boolean)=> void;
}

const MyMenu = ({handleClick, handleClose}:MenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        handleClick(true); // Notify parent component that the menu is open
    };

    const handleMenuClose = (navigation:string) => {

        setAnchorEl(null);
        navigate(navigation)
        handleClose(false);

    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                size="large"
                edge="start"
                color="inherit"

                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenuOpen}
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=> handleMenuClose("/")}>Home</MenuItem>
                <MenuItem onClick={()=> handleMenuClose("/bottles")}>Bar</MenuItem>
                <MenuItem onClick={()=> handleMenuClose("/bottles/add")}>Flasche hinzufügen</MenuItem>
                <MenuItem onClick={()=> handleMenuClose("/guestBook")}>Gästebuch</MenuItem>
                <MenuItem onClick={()=> handleMenuClose("/login")}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default MyMenu;
