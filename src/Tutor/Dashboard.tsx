import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import {
    
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
import prof from "./Images/prof.png";
import coin from "./Images/coins.png";

export default function Dashboard() {
  const [value, setValue] = React.useState<number | null>(4);

  return (
    <Grid container sx={{  height: "100vh" }}>
      <Grid item sm={5}>
        <Tooltip title="Profile">
          <Avatar
            alt="Menushaa"
            src={prof}
            sx={{
              width: 350,
              fontSize: 200,
              height: 350,
              p: 0,
              ml: 2,
              mt: 2,
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
          sx={{ color: "Darkblue", fontSize: "22px", ml: 10, mt: 3 }}
        >
          Menushaa Vijayaraj
        </Typography>
        <Rating
          name="read-only"
          value={value}
          readOnly
          sx={{
            mt: 2,
            ml: 10,
            fontSize: 40,
          }}
        />
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
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <MenuBookIcon sx={{ fontSize: "30px", mt: 2 }} /> Subjects
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>
            Information Technology
          </Link>
          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>Science</Link>
          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19 }}
          >
            <EmailIcon sx={{ fontSize: "30px", mt: 2 }} /> email
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>
            menumenushaa@gmail.com
          </Link>
          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <CallIcon sx={{ fontSize: "30px", mt: 2 }} /> Phone No
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}> 0701193191</Link>

          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <WorkIcon sx={{ fontSize: "30px", mt: 2 }} /> Occupation
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>
            Undergraduate
          </Link>

          <Typography
            fontWeight="600"
            sx={{ color: "Darkblue", fontSize: "22px", mr: 19, mt: 1 }}
          >
            <LocationOnIcon sx={{ fontSize: "30px", mt: 2 }} /> Home Town
          </Typography>

          <Link sx={{ color: "Darkblue", fontSize: "20px" }}>Trincomalee</Link>
        </Stack>
      </Grid>
      <Grid item sm={2}>
        <Stack
          sx={{
            alignItems: "center",
            ml: 7,
            mt: 2,
          }}
        >
          <Typography sx={{ color: "Darkblue", fontSize: "20px", mt: 1 }}>
            <img src={coin} alt="Student" width={40} height={25} /> 951
            <Tooltip title="Add Coins">
              <IconButton
                sx={{
                  fontSize: 20,
                }}
              >
                <AddCircleRoundedIcon color="success" />
              </IconButton>
            </Tooltip>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
