import { Avatar, Box, Typography, useTheme } from "@mui/material";

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100vw",
                height: "60px",
                backgroundColor: theme.palette.secondary.light,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: "bold",
                    px: 2,
                }}
            >
                MyGoogle-Form
            </Typography>

            <Box sx={{ px: 2, }}>
                <Avatar alt="profilePic" src="" />
            </Box>
        </Box>
    );
};

export default Header;
