import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import axios from "axios";

function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // استدعاء API وهمي
    axios.get("/api/mock/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        قائمة المرضى
      </Typography>
      <Paper>
        <List>
          {patients.map((patient, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={patient.name}
                  secondary={`العمر: ${patient.age} | الحالة: ${patient.condition}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default DoctorDashboard;
