import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "system", text: "مرحبًا! كيف يمكنني مساعدتك اليوم؟" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // رد آلي بسيط
    const reply = "شكرًا على رسالتك! سيتم الرد عليك قريبًا.";
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "system", text: reply }]);
    }, 1000);

    setInput("");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        محادثة مع الطبيب
      </Typography>
      <Paper sx={{ p: 3, mb: 2, maxHeight: 400, overflowY: "auto" }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={msg.text}
                primaryTypographyProps={{
                  align: msg.sender === "user" ? "right" : "left",
                  sx: {
                    background:
                      msg.sender === "user" ? "#e0f7fa" : "#f1f1f1",
                    p: 1.5,
                    borderRadius: 2,
                    display: "inline-block",
                    maxWidth: "75%",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="اكتب رسالتك..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button variant="contained" onClick={handleSend}>
          إرسال
        </Button>
      </Box>
    </Container>
  );
};

export default ChatPage;
