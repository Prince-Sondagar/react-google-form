import * as yup from 'yup';

export const AppointmentCreationSchema = yup.object().shape({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is rquired"),
    age: yup
    .number()
    .typeError("Age must be a number")
        .min(18, "Age must be grather than 18 years")
        .max(60, "Age must be less than 60 years")
        .required("Age is required"),
    gender: yup.string().required("Gender is required"),
    email: yup.string().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required").min(10, "Phone Number must be at least 10 digits").max(10, "Phone Number must be at most 10 digits"),
    maritalStatus: yup.string().required("Marital Status is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    houseNumber: yup.string().required("House Number is  required"),
    street: yup.string().required("Street is required"),
    zipCode: yup.string().required("Zip Code is required"),
    // termsAndCondition: yup.boolean().oneOf([true], "TermsAndCondition is required").required("TermsAndCondition is required")
});