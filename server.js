const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Render API endpoint
const RENDER_API = "https://api.render.com/v1/services";

// GET endpoint: מחזיר רשימת שירותים מהחשבון
app.get("/services", async (req, res) => {
  try {
    const result = await axios.get(RENDER_API, {
      headers: {
        Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
      },
    });

    res.json(result.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch Render services" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
