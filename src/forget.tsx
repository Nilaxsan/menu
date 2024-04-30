import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import forgot from "./forgot.jpg";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';

function isValidEmail(email: string): boolean {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

 const  Forgot= () => {
  const [emailError, setEmailError] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;

    // Validate email
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    console.log({ email});

  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError(""); // Clear email error when email input changes
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
                  Forgot Password
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
<Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src={forgot} alt="forgot" width={200} height={200}  />
                </Box>
              </Box>
              <Box>
                <Typography
                 sx={{fontFamily: "Literata Bold Italics",
                fontSize: 20,
                color: "#1a237e",
                textAlign: "center",
                mt:2}}>Don’t worry, it happens to the best of us.</Typography>
              </Box>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={Boolean(emailError)}
                  helperText={emailError}
                  onChange={handleEmailChange} 
                />

                <Box display={"flex"}
                justifyContent={"flex-end"}>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    component={RouterLink} to="/OTP"
                  >
                    Continue
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

export default Forgot;
