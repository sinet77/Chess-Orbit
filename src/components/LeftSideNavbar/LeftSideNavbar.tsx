import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const drawerWidth = 240;

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Przyciski nawigacyjne */}
      <IconButton
        edge="start"
        color="inherit"
        onClick={toggleDrawer}
        aria-label="menu"
        sx={{
          position: "absolute",
          left: open ? `${drawerWidth}px` : "0px",
          transition: "left 0.3s",
        }}
      >
        <DoubleArrowIcon />
      </IconButton>

      {/* Persistent Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <ListItem button onClick={() => console.log("First item clicked")}>
            <ListItemText primary="First Item" />
          </ListItem>
          <ListItem button onClick={() => console.log("Second item clicked")}>
            <ListItemText primary="Second Item" />
          </ListItem>
          <ListItem button onClick={() => console.log("Third item clicked")}>
            <ListItemText primary="Third Item" />
          </ListItem>
        </List>
      </Drawer>

      {/* Główna zawartość */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: open ? `${drawerWidth}px` : "0px",
          transition: "padding-left 0.3s",
        }}
      ></Box>
    </Box>
  );
}
