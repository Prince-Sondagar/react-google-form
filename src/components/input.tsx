import { Box, OutlinedTextFieldProps, TextField, TextFieldProps } from "@mui/material";

interface InputProps extends Omit<OutlinedTextFieldProps, "variant"> {
    variant?: "outlined";
}
const Input: React.FC<InputProps> = ({ id, label, variant = "outlined", sx, ...rest }) => {
    return (
        <Box
            component="form"
            sx={{ ...sx }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id={id}
                label={label}
                variant={variant}
                {...rest}
                size="small"
            />
        </Box>
    );
};

export default Input;