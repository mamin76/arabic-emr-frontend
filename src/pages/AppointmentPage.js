import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const AppointmentPage = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    time: "",
    doctor: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // استدعاء وهمي
    axios.post("/api/mock/appointments", appointment).then(() => {
      setSuccess(true);
      setAppointment({
        name: "",
        date: "",
        time: "",
        doctor: "",
      });
    });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        حجز موعد جديد
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="اسم المريض"
            name="name"
            fullWidth
            margin="normal"
            value={appointment.name}
            onChange={handleChange}
          />
          <TextField
            label="التاريخ"
            name="date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={appointment.date}
            onChange={handleChange}
          />
          <TextField
            label="الوقت"
            name="time"
            type="time"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={appointment.time}
            onChange={handleChange}
          />
          <TextField
            select
            label="اختر الطبيب"
            name="doctor"
            fullWidth
            margin="normal"
            value={appointment.doctor}
            onChange={handleChange}
          >
            <MenuItem value="د. أحمد">د. أحمد</MenuItem>
            <MenuItem value="د. سارة">د. سارة</MenuItem>
            <MenuItem value="د. خالد">د. خالد</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            تأكيد الحجز
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        message="تم الحجز بنجاح"
      />
    </Container>
  );
};

export default AppointmentPage;
