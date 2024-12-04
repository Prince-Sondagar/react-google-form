import { Theme } from "@mui/material";
import InputLabel from "./inputLabel";
import { merge } from "lodash";
import InputBase from "./inputBase";


export default function ComponentsOverrides(theme: Theme) {

    return (
        merge(
            InputLabel(theme),
            InputBase(theme)
        )

    )
}