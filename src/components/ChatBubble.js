import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ChatBubble = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      my={1}
    >
      <Paper
        sx={{
          p: 1,
          maxWidth: "70%",
          bgcolor: isUser ? "primary.light" : "grey.200",
        }}
      >
        <Typography>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default ChatBubble;
