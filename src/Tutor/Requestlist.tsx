import { Box, Grid } from "@mui/material";
import RequestCard from "./RequestCardN";

export default function Requestlist() {
  return (
    
    <Grid container
    sx={{ width:"1298 px",
      height:"auto",

    }}>
      <Grid item sm={12}>
        <Box
          display={"flex"}
          flex-wrap= {"wrap"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{
            mt:5
          }}
        >
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </Box>
        <Box
          sx={{
            mt: 7,
          }}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </Box>
     
      </Grid>
    </Grid>
  );
}
