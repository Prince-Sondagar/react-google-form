import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#38bdf8',
        },
        secondary: {
            main: '#d1d5db',
            light: "#F8F9FA",
        },
        text: {
            primary: '#F8F9FA',
            secondary: '#5B6B79',
            disabled: "#BEC8D0",
        },
        background: {
            paper: "#fff",
            default: "#fff"
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: "#000", 
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff", 
                        color: "#000", 
                        "&:hover fieldset": {
                            borderColor: "#0077b6",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#005f99", 
                        },
                    },
                },
            },
        },
    },
});

export default theme;