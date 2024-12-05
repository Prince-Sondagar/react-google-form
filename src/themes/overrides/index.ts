
import { Theme } from "@mui/material/styles";
import { merge } from "lodash";
import InputBase from "./InputBase";
import InputLabel from "./InputLabel";
import Typography from "./typography";
import OutlinedInput from "./OutlinedInput";
import FormHelperText from "./FormHelperText";


export default function ComponentsOverrides(theme: Theme) {
    return (
        merge(
            InputLabel(theme),
            InputBase(theme),
            Typography(theme),
            OutlinedInput(theme),
            FormHelperText()
        )

    )
}