import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Progress = () => (
    <Box sx={{ display: "flex" }}>
        <CircularProgress className="progress" />
    </Box>
);

export default Progress;
