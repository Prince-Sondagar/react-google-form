import { Box, Card, CardContent, CardHeader, Divider, FormControlLabel, FormHelperText, Grid, InputLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Input from "../../../../components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppointmentCreationSchema } from "../../../../utils/schema";
import CommonButton from "../../../../components/ui/button";



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
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(AppointmentCreationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            email: "",
            phoneNumber: "",
            maritalStatus: "",
            bloodGroup: "",
            country: "",
            state: "",
            city: "",
            houseNumber: "",
            street: "",
            zipCode: "",
            termsAndCondition: false
        }
    })

    const handleSaveSubmit = () => {

    }

    return (
        <Card sx={{ minWidth: 400 }}>
            <CardHeader title={
                <Typography variant="h5" color="black"> Appointment Creation</Typography>
            }
            />
            <Divider />

            <CardContent>
                <form onSubmit={handleSubmit(handleSaveSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>First Name</InputLabel>
                            </Box>
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
                                )}
                            />
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Last Name</InputLabel>
                            </Box>
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
                                )}
                            />
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Age</InputLabel>
                            </Box>
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
                                )}
                            />
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Gender</InputLabel>
                            </Box>
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
                                )}
                            />
                            {errors.gender?.message && <FormHelperText>{errors.gender?.message}</FormHelperText>}
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Email ID</InputLabel>
                            </Box>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        fullWidth
                                        type="email"
                                        placeholder="Enter Your Email ID"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        {...field}
                                    />
                                )}
                            />

                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Phone Number</InputLabel>
                            </Box>
                            <Controller
                                name="phoneNumber"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        fullWidth
                                        type="number"
                                        placeholder="Phone Number is required"
                                        error={!!errors.phoneNumber}
                                        helperText={errors.phoneNumber?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Marital Status</InputLabel>
                            </Box>
                            <Controller
                                name="maritalStatus"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        fullWidth
                                        type="number"
                                        placeholder="MaritalStatus is required"
                                        error={!!errors.maritalStatus}
                                        helperText={errors.maritalStatus?.message}
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xl={6} xs={12} md={6} sm={12}>
                            <Box>
                                <InputLabel>Blood Group</InputLabel>
                            </Box>
                            <Controller
                                name="bloodGroup"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        fullWidth
                                        placeholder="BloodGroup is required"
                                        error={!!errors.bloodGroup}
                                        helperText={errors.bloodGroup?.message}
                                        {...field}
                                    />
                                )}
                            />

                        </Grid>
                    </Grid>
                    <Box>
                        <CommonButton
                            variant="primary"
                            type="submit"
                        >
                            Save
                        </CommonButton>
                    </Box>
                </form>
            </CardContent>
        </Card>
    )
}

export default AppointmentCreationForm;