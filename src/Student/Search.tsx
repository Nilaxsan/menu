import { styled, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import {
  Select as BaseSelect,
  SelectProps,
  selectClasses,
  SelectRootSlotProps,
} from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";

import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.info.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "darkblue",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchSt() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 0,
        }}
      >
        <Box sx={{ width: 700, mt: 15 }}>
          <Search>
            <IconButton
              sx={{
                color: "darkblue",
                position: "absolute",
                left: "8px",
              }}
            >
              <SearchIcon />
            </IconButton>
            <StyledInputBase
              placeholder="Search Tutors…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Grid>
      <Grid
        item
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: 40,
        }}
      >
        <Select placeholder="By Location">
          <Option value="Ampara">Ampara</Option>
          <Option value="Anuradhapura">Anuradhapura</Option>
          <Option value="Badulla">Badulla</Option>
          <Option value="Batticaloa">Batticaloa</Option>
          <Option value="Colombo">Colombo</Option>
          <Option value="Galle">Galle</Option>
          <Option value="Gampaha">Gampaha</Option>
          <Option value="Hambantota">Hambantota</Option>
          <Option value="Jaffna">Jaffna</Option>
          <Option value="Kalutara">Kalutara</Option>
          <Option value="Kandy">Kandy</Option>
  
        </Select>
        <Select placeholder="By Subjects">
          <Option value="Maths">Maths</Option>
          <Option value="Science">Science</Option>
          <Option value="Geography">Geography</Option>
          <Option value="IT">IT</Option>
          <Option value="Histroy">Histroy</Option>
          <Option value="Commerce">Commerce</Option>
        </Select>
        <Select placeholder="By Medium">
          <Option value="English">English</Option>
          <Option value="Tamil">Tamil</Option>
          <Option value="Sinhala">Sinhala</Option>
        </Select>
        <Select placeholder="By Availability">
          <Option value="Weekdays">Weekdays</Option>
          <Option value="Weekend">Weekend</Option>
        </Select>
      </Grid>
    </Grid>
  );
}

function Select(props: SelectProps<string, false>) {
  const slots: SelectProps<string, false>["slots"] = {
    root: Button,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} slots={slots} />;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

const StyledButton = styled("button", { shouldForwardProp: () => true })(
  ({ theme }) => `
    position: relative;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 250px;
    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 2px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
    };
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 2px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
    };
    `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &:focus-visible {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `
);

const Popup = styled("div")`
  z-index: 1;
`;
