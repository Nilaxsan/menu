import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, FormControl, InputLabel, makeStyles, NativeSelect, TextField, Toolbar } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const TutorForm1 = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "100vh" }}>
        <CssBaseline />

        <Box width="100vw">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div">
                Uni Tutor
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Grid item sm={12}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box
              sx={{
                width: 700,
                height: 550,
                marginTop: 8,
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff ",
                mt: 1,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontFamily: "monospace",
                  }}
                >
                  Registation Form
                </Typography>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontSize: 20,
                    fontFamily: "monospace",
                    mt: 2,
                  }}
                >
                  Personal Deatails
                </Typography>
              </Box>
              <Box mt={4}>
                <Grid container sm={12}>
                  <Grid item sm={6}>
                    <TextField
                      sx={{ backgroundColor: "#FFFFFF " }}
                      required
                      label="First Name"
                      variant="standard"
                    />
                  </Grid>
                  <TextField
                    sx={{ backgroundColor: "#FFFFFF " }}
                    required
                    label="Last Name"
                    variant="standard"
                  />
                </Grid>
              </Box>
              <Box>
                <FormControl
                  sx={{ backgroundColor: "#FFFFFF ", width: 220, mt: 3 }}
                >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Occupation*
                  </InputLabel>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "Grade",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={0}></option>
                    <option value={1}>Lecturer</option>
                    <option value={2}>Undergraduate</option>
                  </NativeSelect>
                </FormControl>
              </Box>

              <div>
                <Grid container sm={12}>
                  <Grid item sm={6}>
                    <TextField
                      sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                      required
                      label="Address"
                      variant="standard"
                    />
                  </Grid>
                  <FormControl
                    sx={{ backgroundColor: "#FFFFFF ", width: 220, mt: 3 }}
                  >
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Home Town*
                    </InputLabel>
                    <NativeSelect
                      defaultValue={0}
                      inputProps={{
                        name: "Grade",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={0}></option>
                      <option value={1}>Ampara</option>
                      <option value={2}>Anuradhapura</option>
                      <option value={3}>Badulla</option>
                      <option value={4}>Batticaloa</option>
                      <option value={5}>Colombo</option>
                      <option value={6}>Galle</option>
                      <option value={7}>Gampaha</option>
                      <option value={8}>Hambantota</option>
                      <option value={9}>Jaffna</option>
                      <option value={10}>Kalutara</option>
                      <option value={11}>Kandy</option>
                      <option value={12}>Kegalle</option>
                      <option value={13}>Kilinochchi</option>
                      <option value={14}>Kurunegala</option>
                      <option value={15}>Mannar</option>
                      <option value={16}>Matale</option>
                      <option value={17}>Matara</option>
                      <option value={18}>Monaragala</option>
                      <option value={19}>Mullaitivu</option>
                      <option value={20}>Nuwara Eliya</option>
                      <option value={21}>Polonnaruwa</option>
                      <option value={22}>Puttalam</option>
                      <option value={23}>Ratnapura</option>
                      <option value={24}>Trincomalee</option>
                      <option value={25}>Vavuniya</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </div>
              <div>
                <TextField
                  sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                  required
                  label="Phone Number"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                  required
                  label="University Mail"
                  variant="standard"
                />
              </div>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button type="submit" variant="contained" sx={{ mt: 0, mb: 2 }}
                component={RouterLink} to="/TutorFormContinue">
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TutorForm1;
