import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const PatientPage = () => {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
  });
  const [snackbar, setSnackbar] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("/api/mock/appointments", form);
    setSnackbar(true);
    setForm({ doctor: "", date: "", time: "" });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        حجز موعد
      </Typography>

      <Box display="flex" flexDirection="column" gap={2} width="100%" maxWidth={400}>
        <TextField
          label="اسم الطبيب"
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
        />
        <TextField
          label="تاريخ الموعد"
          type="date"
          name="date"
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={handleChange}
        />
        <TextField
          label="الوقت"
          type="time"
          name="time"
          InputLabelProps={{ shrink: true }}
          value={form.time}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          تأكيد الحجز
        </Button>
      </Box>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        message="تم حجز الموعد بنجاح"
      />
    </Container>
  );
};

export default PatientPage;
