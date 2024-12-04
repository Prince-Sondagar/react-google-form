import * as yup from 'yup';

export const AppointmentCreationSchema = yup.object().shape({
    firstName: yup.string().required({ message: "firstName is required" }),
    lastName: yup.string().required({ mesage: "lastName is rquired" }),
    age: yup.number().required("Age is required").min(18, "Age must be grather than 18 years").max(60, "Age must be less than 60 years"),
    gender: yup.string().required("Gender is required")
})