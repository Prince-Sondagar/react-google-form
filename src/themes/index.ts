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
    }
});

export default theme;