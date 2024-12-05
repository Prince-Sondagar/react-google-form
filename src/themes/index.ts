import { createTheme, Theme } from "@mui/material/styles";
import ComponentsOverrides from "./overrides";

let secondaryColors = ['#F8F9FA', '#F8F9FA', '#F3F5F7', '#DBE0E5', '#BEC8D0', '#8996A4', '#5B6B79', '#3E4853', '#1D2630', '#131920'];
let errorColors = ['#341d1b', '#d31c1c', '#dc2626', '#e76767', '#f5bebe'];


const themes: Theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
            dark: "#1565c0",
        },
        secondary: {
            main: secondaryColors[6],
            light: secondaryColors[3],
            400: secondaryColors[400],
            800: secondaryColors[8],

        },
        error: {
            main: errorColors[2],
            dark: errorColors[3],
            light: errorColors[1],
        },
        background: {
            paper: "#fff",
            default: secondaryColors[0],
        },
        text: {
            primary: secondaryColors[8],
            secondary: secondaryColors[6],
            disabled: secondaryColors[4],
        },
    },
});

themes.components = ComponentsOverrides(themes);

export default themes;