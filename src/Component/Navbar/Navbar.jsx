"use client";
import React, { useState } from "react";
import { Button, Grid, Stack, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid
      container
      padding={2}
      paddingX={4}
      alignItems="center"
      sx={{ backgroundColor: "black", color: "white" }}
    >
      {/* Logo */}
      <Grid item xs={6}>
        Logo
      </Grid>

      {/* Desktop Navigation */}
      <Grid item xs={6} display="flex" justifyContent="flex-end">
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}}>Home</Button>
          <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}}>About</Button>
          <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}}>Contact</Button>
        </Stack>

        {/* Mobile Menu Button */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
      </Grid>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <Grid item xs={12}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{
              backgroundColor: "black",
              padding: 2,
              display: { xs: "flex", lg: "none" },
            }}
          >
            <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}} fullWidth >Home</Button>
            <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}} fullWidth>About</Button>
            <Button variant="contained" sx={{backgroundColor:"transparent",color:"white", "&:hover":{color:"red"}}} fullWidth>Contact</Button>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default Navbar;
