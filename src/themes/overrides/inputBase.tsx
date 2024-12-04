

// ==============================|| OVERRIDES - INPUT BASE ||============================== //

import { Theme } from "@mui/material/styles";

export default function InputBase(theme: Theme) {
    return {
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontSize: '0.75rem',
                    "& .MuiOutlinedInput-root": {
                        color: "#000",
                        "&:hover fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                },
            },
        },
    };
}
