import { Theme } from "@mui/material";


export default function Typography(theme: Theme) {

    return {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#1D2630"
                },
            },
        }
    }
}