

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Settings, Info } from '@mui/icons-material';


const drawerWidth = 240;

const SideBar = () => {
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
                    {[
                        { text: 'Home', icon: <Home /> },
                        { text: 'Settings', icon: <Settings /> },
                        { text: 'About', icon: <Info /> },
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ color: "black" }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>

    );
};

export default SideBar;
