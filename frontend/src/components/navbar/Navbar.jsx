import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import RedeemIcon from "@mui/icons-material/Redeem";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import useQuery from "@/hooks/useQuery";

export default function LabelBottomNavigation() {
  const query = useLocation();
  const [value, setValue] = React.useState(query.pathname.split("/")[1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000, // Ensure the BottomNavigation is above other content
        border: "3px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "white", // Optionally, add a background color
      }}
    >
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          component={Link}
          to="/home"
        />
        <BottomNavigationAction
          label="Collections"
          value="collections"
          icon={<CollectionsBookmarkIcon />}
          component={Link}
          to="/collections"
        />
        <BottomNavigationAction
          label="Location"
          value="location"
          icon={<LocationOnIcon />}
          component={Link}
          to="/location"
        />
        <BottomNavigationAction
          label="Redeem"
          value="redeem"
          icon={<RedeemIcon />}
          component={Link}
          to="/redeem"
        />
      </BottomNavigation>
    </Box>
  );
}
