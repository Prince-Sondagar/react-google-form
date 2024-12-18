import { Box, Button } from "@mui/material";
import { ArrowBackIos, NavigateNext } from '@mui/icons-material';

type IPaginationProps = {
    totalPages: number,
    currentPage: number,
    handlePageChange: (page: number) => void
}

const Pagination = ({ totalPages, currentPage, handlePageChange }: IPaginationProps) => {

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mt: 2,
            }}
        >
            {/* Previous Button */}
            <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage == 1}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    p: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ArrowBackIos fontSize="small" />
            </Button>

            {[...Array(totalPages)].map((_, index) =>
                <Button
                    key={index}
                    variant={currentPage === index + 1 ? "contained" : "outlined"}
                    onClick={() => handlePageChange(index + 1)}
                    sx={{
                        minWidth: "40px",
                        height: "40px",
                        p: 0,
                        borderRadius: "8px",
                        fontWeight: currentPage === index + 1 ? "bold" : "normal",
                    }}
                >
                    {index + 1}
                </Button>
            )}

            {/* Next Button */}
            <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    p: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <NavigateNext fontSize="medium" />
            </Button>
        </Box>
    )
}

export default Pagination;