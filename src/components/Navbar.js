import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">نظام السجلات الطبية</Typography>
        <Button color="inherit" onClick={onLogout}>
          تسجيل الخروج
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
