import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  TextField,
  Toolbar,
} from "@mui/material";





// Define interface for form values
interface FormValues {
  firstName: string;
  lastName: string;
  grade: number;
  schoolName: string;
  address: string;
  homeTown: number;
  phoneNumber: string;
  email: string;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const StudentForm = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    firstName: "",
    lastName: "",
    grade: 0,
    schoolName: "",
    address: "",
    homeTown: 0,
    phoneNumber: "",
    email: "",
  });

  // State variables for field errors
  const [firstNameError, setFirstNameError] = React.useState<string>("");
  const [lastNameError, setLastNameError] = React.useState<string>("");
  const [gradeError, setGradeError] = React.useState<string>("");
  const [schoolNameError, setSchoolNameError] = React.useState<string>("");
  const [addressError, setAddressError] = React.useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const [homeTownError, setHomeTownError] = React.useState<string>("");

  // Adjust the type of handleChange function
const handleChange: React.ChangeEventHandler<{ name?: string; value: unknown }> = (e) => {
  const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
  if (name) {
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
};
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation logic
    let isValid = true;

    if (!formValues.firstName.trim()) {
      setFirstNameError("Please enter your first name.");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!formValues.lastName.trim()) {
      setLastNameError("Please enter your last name.");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (formValues.grade === 0) {
      setGradeError("Please select your grade.");
      isValid = false;
    } else {
      setGradeError("");
    }
    if (formValues.homeTown === 0) {
      setHomeTownError("Please select your homeTown.");
      isValid = false;
    } else {
      setHomeTownError("");
    }

    if (!formValues.schoolName.trim()) {
      setSchoolNameError("Please enter your school name");
      isValid = false;
    } else {
      setSchoolNameError("");
    }

    if (!formValues.address.trim()) {
      setAddressError("Please enter your address.");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (!/^07\d{8}$/.test(formValues.phoneNumber.trim())) {
      setPhoneNumberError("Please enter your phone number  (07xxxxxxxx)");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      setEmailError("Please enter your email address (abc@gmail.com)");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      //  validation passes, submit the form
      alert("Form submitted successfully!");
    }
  };

  const boxHeight = (firstNameError || lastNameError || gradeError || schoolNameError || addressError || phoneNumberError || emailError || homeTownError) ? 650 : 550;


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "120vh" }}>
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
                height: boxHeight,
                marginTop: 8,
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#FFFFFF ",
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
                  Registration Form
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Grid container sm={12}>
                  <Grid item sm={6}>
                    <TextField
                      sx={{ backgroundColor: "#FFFFFF " }}
                      required
                      label="First Name"
                      variant="standard"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      error={Boolean(firstNameError)}
                    />
                    <FormHelperText error>{firstNameError}</FormHelperText>
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      sx={{ backgroundColor: "#FFFFFF " }}
                      required
                      label="Last Name"
                      variant="standard"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      error={Boolean(lastNameError)}
                    />
                    <FormHelperText error>{lastNameError}</FormHelperText>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <FormControl required
                  sx={{ backgroundColor: "#FFFFFF ", width: 220, mt: 3 }}
                >
                  <InputLabel variant="standard" htmlFor="grade">
                    Grade
                  </InputLabel>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "grade",
                      id: "grade",
                    }}
                    value={formValues.grade}
                    onChange={handleChange}

                    error={Boolean(gradeError)}
                  >
                    <option value={0}></option>
                    <option value={9}>Grade 09</option>
                    <option value={10}>Grade 10</option>
                    <option value={11}>Grade 11</option>
                    <option value={12}>A/L Level</option>
                  </NativeSelect>
                  <FormHelperText error>{gradeError}</FormHelperText>
                </FormControl>
              </Box>
              <div>
                <TextField
                  sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                  required
                  label="School Name"
                  variant="standard"
                  name="schoolName"
                  value={formValues.schoolName}
                  onChange={handleChange}
                  error={Boolean(schoolNameError)}
                />
                <FormHelperText error>{schoolNameError}</FormHelperText>
              </div>
              <div>
                <Grid container sm={12}>
                  <Grid item sm={6}>
                    <TextField
                      sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                      required
                      label="Address"
                      variant="standard"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                      error={Boolean(addressError)}
                    />
                    <FormHelperText error>{addressError}</FormHelperText>
                  </Grid>
                  <FormControl
                    sx={{ backgroundColor: "#FFFFFF ", width: 220, mt: 3 }}
                  >
                    <InputLabel variant="standard" htmlFor="homeTown">
                      Home Town*
                    </InputLabel>
                    <NativeSelect
                      defaultValue={0}
                      inputProps={{
                        name: "homeTown",
                        id: "homeTown",
                      }}
                      value={formValues.homeTown}
                      onChange={handleChange}

                      error={Boolean(homeTownError)}
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
                    <FormHelperText error>{homeTownError}</FormHelperText>
                  </FormControl>
                </Grid>
              </div>
              <div>
                <TextField
                  sx={{ backgroundColor: "#FFFFFF ", mt: 3 }}
                  required
                  label="Phone Number"
                  variant="standard"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  error={Boolean(phoneNumberError)}
                />
                <FormHelperText error>{phoneNumberError}</FormHelperText>
              </div>
              <div>
                <TextField
                  sx={{ backgroundColor: "#FFFFFF ", mt: 2 }}
                  required
                  label="Email Address"
                  variant="standard"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  error={Boolean(emailError)}
                />
                <FormHelperText error>{emailError}</FormHelperText>
              </div>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 0, mb: 2 }}
                  onClick={(e) =>
                    handleSubmit(
                      e as unknown as React.FormEvent<HTMLFormElement>
                    )
                  }
                  href="#"// placeholder href for anchor elements
                
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default StudentForm;
