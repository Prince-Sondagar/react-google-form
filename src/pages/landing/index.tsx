import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Root = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", gap: 2 }}>
            <Typography variant="h4">Welcome To Google Form</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
            </Button>
        </Box>
    );
};

export default Root;