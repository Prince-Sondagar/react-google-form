import { useEffect, useState } from "react";
import CommonButton from "../../../components/ui/button";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardActions, CardContent, Divider, Grid, InputBase, Paper, Typography } from "@mui/material";
import { Edit, Delete, Search } from '@mui/icons-material';
import Pagination from "../../../components/Pagination";


const Dashboard = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState<any>([]);
    const [filteredUsers, setFilteredUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const itemsPerPage = 1;
    // const totalPages = Math.ceil(userDetails?.length / itemsPerPage);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userDetails") || '[]');
        setUserDetails(data);
        setFilteredUser(data);
        setTotalPages(Math.ceil(data?.length / itemsPerPage));
    }, []);

    useEffect(() => {
        if (filteredUsers.length > 0) {
            console.log("filteredUsers ===>", filteredUsers);
            const paginatedData = filteredUsers?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
            console.log("paginatedData==>", paginatedData);
            setFilteredUser(paginatedData);
        }
    }, [currentPage]);

    useEffect(() => {
        if (searchQuery.trim()) {
            const searchFields = ["firstName", "lastName", "gender", "city", "email", "maritalStatus", "country", "state", "phoneNumber"];
            const filteredResult = userDetails.filter((user: any) => {
                //     const combinedFields = `
                //     ${user?.firstName || ""} 
                //     ${user?.lastName || ""} 
                //     ${user?.gender || ""} 
                //     ${user?.city || ""} 
                //     ${user?.email || ""} 
                //     ${user?.maritalStatus || ""} 
                //     ${user?.country || ""} 
                //     ${user?.state || ""}
                //     ${user?.phoneNumber || ""}
                // `.toLowerCase();
                //     return combinedFields.includes(searchQuery.toLowerCase());
                searchFields.some((field: any) =>
                    user[field]?.toLowerCase().includes(searchQuery?.toLowerCase())
                );
            });
            setTotalPages(Math.ceil(filteredResult?.length / itemsPerPage));
            setFilteredUser(filteredResult);
        } else {
            userDetails?.length && setFilteredUser(userDetails);
        }
    }, [searchQuery]);
    // console.log("userDetails ===>", userDetails);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Box sx={{ mb: 3 }}>
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
                    <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100vh" }}>
                        <Typography variant="h5">No Data Available</Typography>
                        <CommonButton
                            variant="link"
                            onClick={() => navigate('/appointmentCreate')}
                        >
                            Create  Appointment
                        </CommonButton>
                    </Box>
                )}

                {(searchQuery && !filteredUsers.length) && (
                    <Box sx={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100vh" }}>
                        <Typography>No Search Result Found</Typography>
                    </Box>
                )}

                {filteredUsers?.length > 0 && (
                    <>
                        <Box >
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

                {filteredUsers.length > 0 && (
                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: 10 }}>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageChange={handlePageChange}
                        />
                    </Box>
                )}
            </>
        </Box>
    );
};

export default Dashboard;