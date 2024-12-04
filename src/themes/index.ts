import { createTheme, Theme } from "@mui/material";
import ComponentsOverrides from "./overrides";

let secondaryColors = ['#F8F9FA', '#F8F9FA', '#F3F5F7', '#DBE0E5', '#BEC8D0', '#8996A4', '#5B6B79', '#3E4853', '#1D2630', '#131920'];


const themes: Theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
            dark: "#1565c0",
        },
        secondary: {
            main: '#5b6b79',
            light: "#F8F9FA",
            800: secondaryColors[8],
        },
        text: {
            primary: '#F8F9FA',
            secondary: '#5B6B79',
            disabled: "#BEC8D0",

        },
        background: {
            paper: "#fff",
            default: "#fff",
        },
    },
});

themes.components = ComponentsOverrides(themes);

export default themes;