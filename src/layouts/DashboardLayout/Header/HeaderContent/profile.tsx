import { Avatar, Box, IconButton, Tooltip } from "@mui/material";


const Profile = () => {

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default Profile;