// import React from "react";
// import Header from "./Header";
// import { Outlet } from "react-router";
// import { Box, Container } from "@mui/material";
// import SideBar from "./SideBar";
// import AuthGuard from "../../utils/route-guard/AuthGuard";

// const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
//     return (
//         <AuthGuard>
//             <Box>
//                 <Header />
//                 <Box
//                     sx={{
//                         display: "flex",
//                         height: "calc(100vh - 60px)",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: 240,
//                             flexShrink: 0,
//                             bgcolor: "background.paper",
//                             borderRight: 1,
//                             borderColor: "divider",
//                             position: "relative",
//                             zIndex: 1,
//                         }}
//                     >
//                         <SideBar />
//                     </Box>
//                     <Box
//                         component="main"
//                         sx={{
//                             flexGrow: 1,
//                             overflowY: "auto",
//                             padding: 2,
//                             width: `calc(100% - 240px)`,
//                         }}
//                     >
//                         <Container
//                             sx={{
//                                 padding: 0,
//                             }}
//                         >
//                             {children}
//                         </Container>
//                     </Box>
//                 </Box>
//             </Box>
//         </AuthGuard>
//     );
// };

// export default DashboardLayout;



import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import SideBar from "./SideBar";

const DashboardLayout = () => {
    return (
        <Box sx={{ height: "100vh" }}>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    height: "calc(100vh - 60px)",
                    overflowX: "hidden",
                    marginX: "auto",
                    width: "100%"
                }}
            >
                <Box
                    sx={{
                        width: 270,
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
                        overflowX: "hidden",
                        padding: 3,
                        width: `calc(100% - 240px)`,
                        maxWidth: "100%"
                    }}
                    className="no-scrollbar"
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;
