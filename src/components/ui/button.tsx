import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { ReactNode } from "react";


const StyledButton = styled(Button)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "none",
    letterSpacing: "0",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "6px",
    minWidth: "auto",
    height: "36px",
    transition: "background-color 0.3s",
    gap: "4px",
    ":disabled": {
        opacity: "0.6",
        pointerEvents: "none",
    },
    "&:hover": {
        color: theme.palette.primary.main,
    },
    "&:focus-visible ": {
        outline: "none",
    },
    "&::after": {
        boxShadow: "none",
    },
    "&.default": {
        backgroundColor: "transparent",
        color: `${theme.palette.secondary.main}`,
        borderRadius: "50%",
        padding: "8px",
        "&:hover": {
            backgroundColor: "#F6F7F6",
        },
    },
    "&.outline": {
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: "transparent",
        padding: "8px 20px",
        "&:hover": {
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.dark,
        },
    },
    "&.success": {
        border: "1px solid #15803d",
        backgroundColor: "#15803d",
        color: "#fff",
        padding: "8px 20px !important",
        "&:hover": {
            backgroundColor: "#15803de0",
            border: "1px solid #15803d!important",
            color: "#fff",
        },
    },
    "&.danger": {
        border: "1px solid #dc3545",
        backgroundColor: "#dc3545",
        color: "#fff",
        padding: "8px 20px",
        "&:hover": {
            backgroundColor: "#ef4050",
            border: "1px solid #ef4050",
            color: "#fff",
        },
    },
    "&.primary": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: "8px 20px",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    "&.lightSuccess": {
        backgroundColor: "#08ff95",
        color: "black",
        "&:hover": {
            backgroundColor: "#0fef8f",
        },
    },
    "&.grey": {
        backgroundColor: "#ececec",
        color: "black",
        padding: "8px 20px",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        },
    },
    "&.secondary": {
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    "&.dashed": {
        backgroundColor: "#f8f9fa",
        color: '#5b6b79',
        border: '1px dashed #5b6b79',
        "&:hover": {
            backgroundColor: "#f8f9fa",
            color: '#3e4853',
            border: '1px dashed #3e4853',
        },
    },
}))


type MuiButtonProps = {
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "primary"
    | "success"
    | "lightSuccess"
    | "grey"
    | "danger"
    | "secondary"
    | "dashed";
    sizeType?: "defaultSize" | "sm" | "lg" | "icon" | "xs";
    style?: React.CSSProperties;
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    sx?: object;
    loading?: boolean;
    startIcon?: JSX.Element
};

const CommonButton = ({
    variant = "default",
    sizeType = "defaultSize",
    style,
    children,
    onClick,
    disabled,
    type = "button",
    sx,
    loading,
    ...props
}: MuiButtonProps) => {

    return (
        <StyledButton
            disableRipple
            className={clsx(variant, sizeType)}
            style={style}
            onClick={onClick}
            disabled={disabled}
            type={type}
            sx={sx}
            {...props}
        >
            {loading ? (
                <CircularProgress
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    size={24}
                    color="inherit"
                />
            ) : (
                children
            )}
        </StyledButton>
    )
}

export default CommonButton;