import { Box, Card, CardContent, CardHeader, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import Input from "../../../../components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppointmentCreationSchema } from "../../../../utils/schema";
import CommonButton from "../../../../components/ui/button";
import { useNavigate } from "react-router";


const AppointmentCreationForm = () => {
    const navigate = useNavigate();

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(AppointmentCreationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: undefined,
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
            // termsAndCondition: false
        }
    });


    const onsubmit = (data: any) => {
        const existingDetsils = JSON.parse(localStorage.getItem('userDetails') || '[]');
        localStorage.setItem("userDetails", JSON.stringify([...existingDetsils, data]));
        navigate('/dashboard')
    }

    return (
        <Card sx={{ minWidth: 400 }}>
            <CardHeader title={
                <Typography variant="h5" color="black"> Appointment Creation</Typography>
            }
            />
            <Divider />

            <CardContent>
                <Box>

                </Box>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <Box sx={{ my: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
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
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
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
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
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
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Gender</InputLabel>
                                </Box>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            {...field}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    )}
                                />
                                {errors.gender?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.gender?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
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
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
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
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Marital Status</InputLabel>
                                </Box>
                                <Controller
                                    name="maritalStatus"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            fullWidth
                                            {...field}
                                            sx={{
                                                height: "40px"
                                            }}
                                            displayEmpty
                                            error={!!errors.maritalStatus}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Marital Status
                                            </MenuItem>
                                            <MenuItem value="single">Single</MenuItem>
                                            <MenuItem value="married">Married</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.maritalStatus?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.maritalStatus?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Blood Group</InputLabel>
                                </Box>
                                <Controller
                                    name="bloodGroup"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            fullWidth
                                            {...field}
                                            sx={{
                                                height: "40px"
                                            }}
                                            displayEmpty
                                            error={!!errors.bloodGroup}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Your Blood Group
                                            </MenuItem>
                                            <MenuItem value="A+">A+</MenuItem>
                                            <MenuItem value="A-">A-</MenuItem>
                                            <MenuItem value="B+">B+</MenuItem>
                                            <MenuItem value="B-">B-</MenuItem>
                                            <MenuItem value="O+">O+</MenuItem>
                                            <MenuItem value="O-">O-</MenuItem>
                                            <MenuItem value="AB+">AB+</MenuItem>
                                            <MenuItem value="AB-">AB-</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.bloodGroup?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.bloodGroup?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Country</InputLabel>
                                </Box>
                                <Controller
                                    name="country"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            fullWidth
                                            {...field}
                                            sx={{
                                                height: "40px"
                                            }}
                                            displayEmpty
                                            error={!!errors.country}
                                        >
                                            <MenuItem value="" disabled>
                                                Select Country
                                            </MenuItem>
                                            <MenuItem value="india">India</MenuItem>
                                            <MenuItem value="afghanistan">Afghanistan</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.country?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.country?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>State</InputLabel>
                                </Box>
                                <Controller
                                    name="state"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            fullWidth
                                            {...field}
                                            sx={{
                                                height: "40px"
                                            }}
                                            displayEmpty
                                            error={!!errors.state}
                                        >
                                            <MenuItem value="" disabled>
                                                Select State
                                            </MenuItem>
                                            <MenuItem value="india">Gujrat</MenuItem>
                                            <MenuItem value="afghanistan">Rajasthan</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.state?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.state?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>City</InputLabel>
                                </Box>
                                <Controller
                                    name="city"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            fullWidth
                                            {...field}
                                            sx={{
                                                height: "40px"
                                            }}
                                            displayEmpty
                                            error={!!errors.city}
                                        >
                                            <MenuItem value="" disabled>
                                                Select City
                                            </MenuItem>
                                            <MenuItem value="surat">Gujrat</MenuItem>
                                            <MenuItem value="ahemdabad">Ahemdabad</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.city?.message && (
                                    <Typography color="error" variant="caption">
                                        {errors.city?.message}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>House Number</InputLabel>
                                </Box>
                                <Controller
                                    name="houseNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            placeholder="House/Building No"
                                            error={!!errors.houseNumber}
                                            helperText={errors.houseNumber?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Street</InputLabel>
                                </Box>
                                <Controller
                                    name="street"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            placeholder="street"
                                            error={!!errors.street}
                                            helperText={errors.street?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                <Box mb={1}>
                                    <InputLabel>Zip Code</InputLabel>
                                </Box>
                                <Controller
                                    name="zipCode"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            fullWidth
                                            placeholder="Enter ZipCode"
                                            error={!!errors.zipCode}
                                            helperText={errors.zipCode?.message}
                                            {...field}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "end", gap: '10px' }}>
                        <CommonButton
                            variant="outline"
                            type="button"
                            onClick={() => reset()}
                        >
                            Cancel
                        </CommonButton>
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