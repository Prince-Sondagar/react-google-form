

// ==============================|| OVERRIDES - INPUT BASE ||============================== //

import { Theme } from "@mui/material/styles";

export default function InputBase(theme: Theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                sizeSmall: {
                    fontSize: '0.875rem'
                }
                // root: {
                //     fontSize: '0.875rem',
                //     "& .MuiOutlinedInput-root": {
                //         color: "#000",
                //         "&:hover fieldset": {
                //             borderColor: theme.palette.primary.main,
                //         },
                //         "&.Mui-focused fieldset": {
                //             borderColor: theme.palette.primary.main,
                //         },
                //     },
                // },
            },
        },
    };
}
