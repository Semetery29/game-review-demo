import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import About from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [value, setValue] = useState("/");

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        background: "rgb(25 118 210 / 1)",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Link to="/home">
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{
            color: value === "/home" ? "white" : "inherit",
          }}
        />
      </Link>
      <Link to="/about">
        <BottomNavigationAction
          label="About"
          icon={<About />}
          sx={{
            color: value === "/about" ? "white" : "inherit",
          }}
        />
      </Link>
      <Link to="/login">
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{
            color: value === "/login" ? "white" : "inherit",
          }}
        />
      </Link>
    </BottomNavigation>
  );
};

export default Footer;
