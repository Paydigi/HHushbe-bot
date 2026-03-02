const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;

app.get("/", (req, res) => {
  res.send("Hushbe AI Bot is running.");
});

app.post("/webhook", async (req, res) => {
  const message = req.body.message;

  if (message) {
    const chatId = message.chat.id;

    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: "Bot is connected successfully."
    });
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log("Server running...");
});
