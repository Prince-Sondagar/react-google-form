import { useState } from "react";
import { useNavigate } from "react-router";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, Tooltip, Typography, useTheme } from "@mui/material";

import { yupResolver } from '@hookform/resolvers/yup';

import { Add, Close, Delete, KeyboardArrowDown, Save } from "@mui/icons-material";
import { AppointmentCreationSchema } from "../../utils/schema";
import CommonButton from "../ui/button";
import Input from "../ui/input";


const AppointmentCreationForm = () => {
    const navigate = useNavigate()
    const theme = useTheme();
    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

    const {
        control,
        formState: { errors },
        reset,
        trigger
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(AppointmentCreationSchema),
        defaultValues: {
            items: [{
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
            }]
            // termsAndCondition: false
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items'
    });

    const handleAddAppointMent = () => {
        append({
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
        } as any);
        setExpandedAccordion(fields.length);
    };

    const appointmentsValues = useWatch({ control, name: 'items', }) || [];

    const handleSaveAppointment = async (event: React.FormEvent) => {
        event.preventDefault();
        const isValid = await trigger('items');
        if (isValid) {
            localStorage.setItem("userDetails", JSON.stringify(appointmentsValues));
        }
    }

    const handleDeleteAppointment = (index: number) => {
        console.log("index --->", index)
        remove(index);
    }

    const handleChangeAccordian = (index: number) => {
        setExpandedAccordion(expandedAccordion === index ? null : index)
    }


    return (
        <>
            <Box pb='8px' borderBottom={`1px solid ${theme.palette.divider}`} mb='24px'>
                <Typography
                    fontSize={{ xs: '20px', sm: '24px' }}
                    fontWeight='500'
                    color={`${theme.palette.secondary[800]}`}
                    mb='12px'
                >
                    Experiences
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end' }} mb='16px'>
                <CommonButton
                    variant="primary"
                    startIcon={<Add />}
                    style={{ fontWeight: "bold" }}
                    onClick={handleAddAppointMent}
                >
                    Add
                </CommonButton>
            </Box>
            {fields.map((field, index) => (
                <Accordion
                    expanded={expandedAccordion === index}
                    onChange={() => handleChangeAccordian(index)}
                    sx={{
                        mt: 2,
                        borderStyle: "solid",
                        borderWidth: errors.items?.[index] ? 1 : 0,
                        borderColor: errors.items?.[index] ? theme.palette.error.dark : "",
                        borderRadius: 1,
                        "&:before": {
                            display: "none",
                        },
                    }}

                >
                    <AccordionSummary
                        expandIcon={
                            <KeyboardArrowDown
                                sx={{
                                    strokeWidth: '3px',
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            />
                        }

                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Box
                            display={'flex'}
                            gap={1}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            width={'100%'}
                        >
                            Appointment {index + 1}
                        </Box>

                        <Tooltip title='Delete' placement='top'>
                            <IconButton
                                color="error"
                                onClick={(event) => {
                                    event?.stopPropagation();
                                    handleDeleteAppointment(index)
                                    // setConfirmDelete(true)
                                    // setDeleteExperienceId(field.id as string)
                                    // setExperienceIndex(index)
                                }}
                                sx={{
                                    "&.Mui-disabled": {
                                        color: "#8b949d !important",
                                    },
                                }}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            // variant="elevation"
                            sx={{
                                minWidth: 400,
                                mt: 1,
                            }}
                        >
                            {errors?.items?.[index] && (
                                <Alert
                                    severity="error" sx={{ m: 1 }}> Please correct the errors in this appointment form.</Alert>
                            )}
                            <Box sx={{ pt: 1 }}>
                                <>
                                    <Box sx={{ my: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>First Name</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.firstName`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            placeholder="Enter First Name"
                                                            error={!!errors.items?.[index]?.firstName}
                                                            helperText={errors?.items?.[index]?.firstName?.message}
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
                                                    name={`items.${index}.lastName`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            placeholder="Enter Last Name"
                                                            error={!!errors?.items?.[index]?.lastName}
                                                            helperText={errors?.items?.[index]?.lastName?.message}
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
                                                    name={`items.${index}.age`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            type="number"
                                                            placeholder="Enter Your Age"
                                                            error={!!errors?.items?.[index]?.age}
                                                            helperText={errors?.items?.[index]?.age?.message}
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
                                                    name={`items.${index}.gender`}
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
                                                {errors?.items?.[index]?.gender?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.gender?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>Email ID</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.email`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            type="email"
                                                            placeholder="Enter Your Email ID"
                                                            error={!!errors?.items?.[index]?.email}
                                                            helperText={errors?.items?.[index]?.email?.message}
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
                                                    name={`items.${index}.phoneNumber`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            type="number"
                                                            placeholder="Phone Number is required"
                                                            error={!!errors?.items?.[index]?.phoneNumber}
                                                            helperText={errors?.items?.[index]?.phoneNumber?.message}
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
                                                    name={`items.${index}.maritalStatus`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="demo-select-small-label"
                                                            id="demo-select-small"
                                                            fullWidth
                                                            {...field}
                                                            sx={{
                                                                height: "40px",
                                                                width: '100%',
                                                                '& .MuiSelect-select': {
                                                                    fontSize: '14px',
                                                                },
                                                            }}
                                                            displayEmpty
                                                            error={!!errors?.items?.[index]?.maritalStatus}
                                                        >
                                                            <MenuItem value="" disabled>
                                                                Select Marital Status
                                                            </MenuItem>
                                                            <MenuItem value="single">Single</MenuItem>
                                                            <MenuItem value="married">Married</MenuItem>
                                                        </Select>
                                                    )}
                                                />
                                                {errors?.items?.[index]?.maritalStatus?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.maritalStatus?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>Blood Group</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.bloodGroup`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="demo-select-small-label"
                                                            id="demo-select-small"
                                                            fullWidth
                                                            {...field}
                                                            sx={{
                                                                height: "40px",
                                                                '& .MuiSelect-select': {
                                                                    fontSize: '14px',
                                                                },
                                                            }}
                                                            displayEmpty
                                                            error={!!errors?.items?.[index]?.bloodGroup}
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
                                                {errors?.items?.[index]?.bloodGroup?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.bloodGroup?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>Country</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.country`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="demo-select-small-label"
                                                            id="demo-select-small"
                                                            fullWidth
                                                            {...field}
                                                            sx={{
                                                                height: "40px",
                                                                '& .MuiSelect-select': {
                                                                    fontSize: '14px',
                                                                },
                                                            }}
                                                            displayEmpty
                                                            error={!!errors?.items?.[index]?.country}
                                                        >
                                                            <MenuItem value="" disabled>
                                                                Select Country
                                                            </MenuItem>
                                                            <MenuItem value="india">India</MenuItem>
                                                            <MenuItem value="afghanistan">Afghanistan</MenuItem>
                                                        </Select>
                                                    )}
                                                />
                                                {errors?.items?.[index]?.country?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.country?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>State</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.state`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="demo-select-small-label"
                                                            id="demo-select-small"
                                                            fullWidth
                                                            {...field}
                                                            sx={{
                                                                height: "40px",
                                                                '& .MuiSelect-select': {
                                                                    fontSize: '14px',
                                                                },
                                                            }}
                                                            displayEmpty
                                                            error={!!errors?.items?.[index]?.state}
                                                        >
                                                            <MenuItem value="" disabled>
                                                                Select State
                                                            </MenuItem>
                                                            <MenuItem value="india">Gujrat</MenuItem>
                                                            <MenuItem value="afghanistan">Rajasthan</MenuItem>
                                                        </Select>
                                                    )}
                                                />
                                                {errors?.items?.[index]?.state?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.state?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>City</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.city`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="demo-select-small-label"
                                                            id="demo-select-small"
                                                            fullWidth
                                                            {...field}
                                                            sx={{
                                                                height: "40px",
                                                                '& .MuiSelect-select': {
                                                                    fontSize: '14px',
                                                                },
                                                            }}
                                                            displayEmpty
                                                            error={!!errors?.items?.[index]?.city}
                                                        >
                                                            <MenuItem value="" disabled>
                                                                Select City
                                                            </MenuItem>
                                                            <MenuItem value="surat">Gujrat</MenuItem>
                                                            <MenuItem value="ahemdabad">Ahemdabad</MenuItem>
                                                        </Select>
                                                    )}
                                                />
                                                {errors?.items?.[index]?.city?.message && (
                                                    <Typography color="error" variant="caption">
                                                        {errors?.items?.[index]?.city?.message}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xl={4} xs={12} md={6} sm={12}>
                                                <Box mb={1}>
                                                    <InputLabel>House Number</InputLabel>
                                                </Box>
                                                <Controller
                                                    name={`items.${index}.houseNumber`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            placeholder="House/Building No"
                                                            error={!!errors?.items?.[index]?.houseNumber}
                                                            helperText={errors?.items?.[index]?.city?.message}
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
                                                    name={`items.${index}.street`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            placeholder="Enter Street"
                                                            error={!!errors?.items?.[index]?.street}
                                                            helperText={errors?.items?.[index]?.street?.message}
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
                                                    name={`items.${index}.zipCode`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            fullWidth
                                                            placeholder="Enter ZipCode"
                                                            error={!!errors?.items?.[index]?.zipCode}
                                                            helperText={errors?.items?.[index]?.zipCode?.message}
                                                            {...field}
                                                        />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </>
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion >
            ))}
            {fields.length > 0 && (
                <Box sx={{ display: "flex", justifyContent: "center", gap: '10px', mt: 3 }}>
                    <CommonButton
                        variant="danger-outline"
                        type="button"
                        style={{ width: "100%" }}
                        onClick={() => reset()}
                    >
                        <Close />
                        Cancel
                    </CommonButton>
                    <CommonButton
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                        onClick={(event) => handleSaveAppointment(event)}
                    >
                        <Save />
                        Save Appointments
                    </CommonButton>
                </Box>
            )
            }
        </>
    );
};

export default AppointmentCreationForm;

