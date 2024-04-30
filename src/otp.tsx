import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import checkmail from "./checkmail.png";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornments from './otpfield'
import { Link as RouterLink } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Otp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item sm={12}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box
              sx={{
                width: 400,
                height: 525,
                marginTop: 8,
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff ",
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography component="h1" variant="h5">
                  Check Your Email
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src={checkmail} alt="mail" width={200} height={200}  />
                </Box>
              <Box>
                <Typography
                 sx={{fontFamily: "Literata Bold Italics",
                fontSize: 20,
                color: "#1a237e",
                textAlign: "center",
                mt:2}}>We just sent an OTP to your registered email address.</Typography>
              </Box>

              <Box 
                sx={{ mt: 4,
                }}
              >
                <Box display={"flex"}
                justifyContent={"center"}
                sx={{mt:4}}>
                <InputAdornments/>
                </Box>

                <Box display={"flex"}
                justifyContent={"flex-end"}>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    component={RouterLink} to="/resetpassword"
                  >
                    Verify OTP
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

