import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        مرحبًا بك في النظام الطبي
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        اختر نوع المستخدم للدخول
      </Typography>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" onClick={() => navigate("/login?role=doctor")}>
          طبيب
        </Button>
        <Button variant="contained" onClick={() => navigate("/login?role=patient")}>
          مريض
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
