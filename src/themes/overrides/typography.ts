import { Theme } from "@mui/material";


// export default function Typography(theme: Theme) {

//     return {
//         MuiTypography: {
//             styleOverrides: {
//                 root: {
//                     color: "#1D2630"
//                 },
//             },
//         }
//     }
// }

// ==============================|| OVERRIDES - TYPOGRAPHY ||============================== //

export default function Typography(theme: any) {
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 12
                }
            }
        }
    };
}
