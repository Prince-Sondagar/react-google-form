import { Theme } from "@mui/material";
import InputLabel from "./inputLabel";
import { merge } from "lodash";
import InputBase from "./inputBase";
import Typography from "./typograph";


export default function ComponentsOverrides(theme: Theme) {

    return (
        merge(
            InputLabel(theme),
            InputBase(theme),
            Typography(theme)
        )

    )
}