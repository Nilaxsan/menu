import React from "react";
import Tutor from "./Tutor.jpg";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import {
  Badge,
  Box,
  Grid,
  IconButton,
  Link,
  Rating,
  Tooltip,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Stu from "./Images/Stu.jpg";
import coin from "./Images/coins.png";
import Sidebar from "./SidebarSt";

export default function DashboardSt() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Grid container sx={{  height: "100vh"}}>
      <Grid item sm={7}
      sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Tooltip title="Profile">
          <Avatar
            alt="Nilax"
            src={Stu}
            sx={{
              width: 350,
              fontSize: 200,
              height: 350,
              p: 0,
              
              mt: 4,
              borderRadius: "50%", // Set borderRadius to 50% to make it circular
              boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.1)",
              overflow: "hidden", // Ensure content doesn't overflow if it's larger than the circle
              position: "relative",
              border: "3px solid",
            }}
          />
        </Tooltip>
        <Typography
          fontWeight="700"
          sx={{ color: "Darkblue", fontSize: "22px", mt:5 }}
        >
          Nilaxsan Alagaiah
        </Typography>
        <Link sx={{ color: "Darkblue", fontSize: "20px",mt:2 }}>
          Grade 11
        </Link>
      </Grid>

      <Grid item sm={5}>
        <Stack
          sx={{
            alignItems: "flex-start",
            color: "darkblue",
            mt: 5,
          }}
        >
          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19 }}
          >
            <EmailIcon sx={{ fontSize: "30px", mt: 2 }} /> email
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>
            nilaxsanala2001@gmail.com{" "}
          </Link>
          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <CallIcon sx={{ fontSize: "30px", mt: 2 }} /> Phone No
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}> 0763460985</Link>



          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <LocationOnIcon sx={{ fontSize: "30px", mt: 2 }} /> Home Town
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>Kilinochchi</Link>
        </Stack>
      </Grid>
    </Grid>
  );
}
