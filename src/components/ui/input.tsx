import { Box, OutlinedTextFieldProps, TextField } from "@mui/material";

interface InputProps extends Omit<OutlinedTextFieldProps, "variant"> {
    variant?: "outlined";
}
const Input: React.FC<InputProps> = ({ id, label, variant = "outlined", size = "small", type = "text", sx, ...rest }) => {
    return (
        <Box
            component="form"
            sx={{ ...sx }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id={id}
                type={type}
                label={label}
                variant={variant}
                {...rest}
                size={size}
            />
        </Box>
    );
};

export default Input;