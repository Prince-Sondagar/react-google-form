

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, } from '@mui/material';
import { Home, Add } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router';


const drawerWidth = 270;

const sidebarItems = [
    { text: 'Dashboard', icon: <Home />, to: "/dashboard" },
    { text: 'Appointment Create', icon: <Add />, to: "/appointmentCreate" },
]

const SideBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const theme = useTheme();

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <List>
                    {sidebarItems.map((item, index) => {
                        const isSelected = item.to === pathname;
                        return (
                            <ListItemButton
                                key={index}
                                sx={{ color: isSelected ? theme.palette.primary.main : 'black' }}
                                onClick={() => navigate(item.to)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    sx={{ mr: 1, color: isSelected ? "primary" : 'secondary' }}
                                >
                                    {item.text}
                                </ListItemText>
                            </ListItemButton>
                        )
                    })}
                </List>
            </Drawer>
        </Box >

    );
};

export default SideBar;
