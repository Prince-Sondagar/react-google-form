import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import CommonButton from "../../components/ui/button";

const Root = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", gap: 2 }}>
            <Typography variant="h4">Welcome To Google Form</Typography>
            <CommonButton onClick={() => navigate('/dashboard')} variant="primary">
                Go to Dashboard
            </CommonButton>
        </Box>
    );
};

export default Root;


