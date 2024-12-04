import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import SideBar from "./SideBar";

const DashboardLayout = () => {
    return (
        <Box>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    height: "calc(100vh - 60px)",
                }}
            >
                <Box
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        bgcolor: "background.paper",
                        borderRight: 1,
                        borderColor: "divider",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <SideBar />
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        padding: 2,
                        width: `calc(100% - 240px)`,
                    }}
                >
                    <Container
                        sx={{
                            padding: 0,
                        }}
                    >
                        <Outlet />
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;
