import { useEffect, useState } from "react";
import CommonButton from "../../../components/ui/button";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardActions, CardContent, Divider, Grid, InputBase, Paper, Typography } from "@mui/material";
import { Edit, Delete, Search } from '@mui/icons-material'


const Dashboard = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [filteredUsers, setFilteredUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userDetails") || '[]');
        setUserDetails(data);
        setFilteredUser(data);
    }, []);

    useEffect(() => {
        if (searchQuery.trim()) {
            const filteredResult = userDetails.filter((userdetail: any) => userdetail?.firstName.toLowerCase().includes(searchQuery.toLowerCase()));
            console.log("filteredResult ===>", filteredResult);
            setFilteredUser(filteredResult);
        } else {
            setFilteredUser(userDetails)
        }
    }, [searchQuery]);

    return (
        <>
            <Box sx={{ mb: 3 }}>
                <Paper
                    component="form"
                    sx={{ p: '3px 5px', display: 'flex', alignItems: 'center' }}
                >
                    <Search />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchQuery}
                        onChange={({ target: { value } }) => setSearchQuery(value)}
                    />
                </Paper>
            </Box>

            {!userDetails.length && (
                <>
                    <Typography>No Data Available</Typography>
                    <CommonButton
                        variant="outline"
                        onClick={() => navigate('/appointmentCreate')}
                    >
                        Create  Appointment
                    </CommonButton>
                </>
            )}

            {(searchQuery && !filteredUsers.length) && (
                <Typography>No Search Result Found</Typography>
            )}

            {filteredUsers?.length > 0 && (
                <>
                    <Box>
                        <Grid container spacing={2}>
                            {filteredUsers?.map((user: any) => (
                                <Grid item xl={4} xs={6} md={6} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="subtitle2" fontWeight="bold">Name:</Typography>
                                            <Typography>{user?.firstName} {user?.lastName}</Typography>

                                            <Typography variant="subtitle2" fontWeight="bold">Email:</Typography>
                                            <Typography>{user?.email}</Typography>

                                            <Typography variant="subtitle2" fontWeight="bold">Gender:</Typography>
                                            <Typography>{user?.gender}</Typography>

                                            <Typography variant="subtitle2" fontWeight="bold">Marital Status:</Typography>
                                            <Typography>{user?.maritalStatus}</Typography>
                                        </CardContent>

                                        <CardActions>
                                            <CommonButton startIcon={<Edit />} variant="primary">Edit</CommonButton>
                                            <CommonButton startIcon={<Delete />} variant="primary">Delete</CommonButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
};

export default Dashboard;