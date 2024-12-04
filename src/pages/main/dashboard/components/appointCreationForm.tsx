import { Box, Card, CardContent, CardHeader, Divider, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Input from "../../../../components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppointmentCreationSchema } from "../../../../utils/schema";



// First Name
// Last Name
// Age
// Gender
// Email ID
// Mobile Number
// Marital Status
// Blood Group
// Country
// State
// City
// House Number
// Street
// Zip Code
// terms and condition


const AppointmentCreationForm = () => {

    const {
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(AppointmentCreationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
            gender: ""
        }
    })

    return (
        <Card sx={{ minWidth: 400 }}>
            <CardHeader title={
                <Typography variant="h5" color="black"> Appointment Creation</Typography>
            }
            />
            <Divider />

            <CardContent>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>First Name</InputLabel>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            placeholder="Enter First Name"
                                            error={!!errors.firstName}
                                            helperText={errors.firstName?.message}
                                            {...field}
                                        />
                                    )} />
                            </Box>
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Last Name</InputLabel>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            placeholder="Enter Last Name"
                                            error={!!errors.lastName}
                                            helperText={errors.lastName?.message}
                                            {...field}
                                        />
                                    )} />
                            </Box>
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Age</InputLabel>
                                <Controller
                                    name="age"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            type="number"
                                            placeholder="Enter Your Age"
                                            error={!!errors.age}
                                            helperText={errors.age?.message}
                                            {...field}
                                            sx={{ color: "black" }}
                                        />
                                    )} />
                            </Box>
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Gender</InputLabel>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    )} />
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default AppointmentCreationForm;