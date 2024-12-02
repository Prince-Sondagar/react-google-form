import { Avatar, Box, Typography, useTheme } from "@mui/material";


const Header = () => {

    const theme = useTheme();
    return (
        <Box sx={{ display: "flex", width: "100%",p:0, backgroundColor: theme.palette.secondary.light }}>
            <Typography>MyGoogle-Form</Typography>
            <Avatar alt="profilePic" src="" />
        </Box>
    );
};

export default Header;