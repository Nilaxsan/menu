import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Box, CardHeader, Grid, IconButton } from "@mui/material";

export default function RequestCard() {
  return (
    <Box height={300} width={200}
   >
      <Card>
        <CardHeader
          avatar={<AccountBoxIcon fontSize="large" />}
          title="Nilaxsan"
          subheader="Grade 11"


          action={
            <IconButton aria-label="more Details">
              <ArrowForwardIosIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ex eveniet alias aliquid sequi mollitia autem suscipit, asperiores,
            explicabo accusantium dolorum.
          </Typography>
        </CardContent>
        <Box display={"flex"} justifyContent={"flex-between"}>
          <CardActions>
          <Button
              variant="contained"
              aria-label="share"
              color="success"
              size="small"
            >
              Accept
            </Button>
            <Button
              variant="contained"
              aria-label="share"
              color="error"
              size="small"
            >
              Reject
            </Button>

           
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
