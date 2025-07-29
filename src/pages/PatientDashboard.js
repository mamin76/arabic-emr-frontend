import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
import axios from "axios";

function PatientDashboard() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    condition: "",
  });

  useEffect(() => {
    // استدعاء API وهمي
    axios.get("/api/mock/profile").then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ملفي الطبي
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="الاسم" fullWidth value={profile.name} disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="العمر" fullWidth value={profile.age} disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="الجنس"
              fullWidth
              value={profile.gender}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="الحالة الصحية"
              fullWidth
              multiline
              value={profile.condition}
              disabled
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default PatientDashboard;
