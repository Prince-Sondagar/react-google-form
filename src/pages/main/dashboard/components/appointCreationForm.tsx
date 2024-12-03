import { Box, Card, CardContent, CardHeader, Divider, InputLabel, Typography } from "@mui/material";
import Input from "../../../../components/input";


const AppointmentCreationForm = () => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader title={
                <Typography variant="h5" color="black"> Appointment Creation</Typography>
            }
            />
            <Divider />
            <CardContent>
                <Box>
                    <InputLabel>First Name</InputLabel>
                    <Input name="firstName" id="my-input" aria-describedby="my-helper-text" />
                </Box>

                <Box>
                    <InputLabel>First Name</InputLabel>
                    <Input name="firstName" id="my-input" aria-describedby="my-helper-text" />
                </Box>
            </CardContent>
        </Card>
    )
}

export default AppointmentCreationForm;