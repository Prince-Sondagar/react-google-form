import { AppBar, AppBarProps, Avatar, Box, Container, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode, useMemo } from "react";
import HeaderContent from "./HeaderContent";


const Header = () => {
    const theme = useTheme();

    const appBar: AppBarProps = {
        position: 'fixed',
        elevation: 0,
        sx: {
            bgcolor: `${theme.palette.secondary.light} !important`,
            backdropFilter: 'blur(8px)',
            borderBottom: `1px solid ${theme.palette.divider}`,
            zIndex: 1200,
            width: { xs: '100%' }
        }
    };

    const headerContent = useMemo(() => <HeaderContent />, [])

    const mainHeader: ReactNode = (
        <Toolbar sx={{ px: { xs: 2, sm: 4.5, lg: 8 }, minHeight: '60px!important' }}>
            <IconButton
                aria-label="open drawer"
                edge="start"
                color="secondary"
                size="medium"
                sx={{
                    color: 'secondary.main', p: 1
                }}
            >
                <MenuIcon />
            </IconButton>
            {headerContent}
        </Toolbar>
    );

    return (
        // <AppBar {...appBar}>
        //     {mainHeader}
        // </AppBar>
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100vw",
                height: "60px",
                backgroundColor: theme.palette.secondary.light,
                zIndex: 1200,
                borderBottom: `1px solid ${theme.palette.divider}`
            }}
        >
            <Box sx={{ px: 2, }}>
                <Avatar alt="profilePic" src="" />
            </Box>
        </Box>
    );
};

export default Header;
