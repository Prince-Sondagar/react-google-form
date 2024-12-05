import { Theme } from "@mui/material/styles";

interface Props {
    variant: any,
    theme: Theme
}


const getColors = (theme: Theme, variant: any) => {
    switch (variant!) {
        case 'secondary':
            return theme.palette.secondary;
        case 'error':
            return theme.palette.error;
        case 'warning':
            return theme.palette.warning;
        case 'info':
            return theme.palette.info;
        case 'success':
            return theme.palette.success;
        default:
            return theme.palette.primary;
    }
};

const getColor = ({ variant, theme }: Props) => {
    const color = getColors(theme, variant);
    const { main } = color;
   
    return {
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: main
        },
        '&.Mui-focused': {
            // boxShadow: shadows,
            '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${main}`
            }
        }
    };
}

export default function OutlinedInput(theme: Theme) {

    return {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: 14
                },
                notchedOutline: {
                    borderColor: theme.palette.secondary[400]
                },
                root: {
                    '& svg': {
                        color: theme.palette.secondary.main
                    },
                    ...getColor({ variant: 'primary', theme }),
                    '&.Mui-error': {
                        ...getColor({ variant: 'error', theme })
                    }
                },
                inputSizeSmall: {
                    padding: '10px 10px 10px 12px'
                },
                inputMultiline: {
                    padding: 0
                },
                colorSecondary: getColor({ variant: 'secondary', theme }),
                colorError: getColor({ variant: 'error', theme }),
                colorWarning: getColor({ variant: 'warning', theme }),
                colorInfo: getColor({ variant: 'info', theme }),
                colorSuccess: getColor({ variant: 'success', theme })
            }
        }
    }
}