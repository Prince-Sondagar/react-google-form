import { Button } from "@mui/material"

type IPaginationProps = {
    totalPages: number,
    currentPage: number,
    handlePageChange: (page: number) => void
}

const Pagination = ({ totalPages, currentPage, handlePageChange }: IPaginationProps) => {

    return (
        <>
            {/* Previous Button */}
            <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage == 1}
            >
                Previous
            </Button>

            {[...Array(totalPages)].map((_, index) =>
                <Button
                    key={index}
                    variant={currentPage === index + 1 ? "contained" : "outlined"}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </Button>
            )}

            {/* Next Button */}
            <Button
                variant="contained"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </>
    )
}

export default Pagination;