const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    const response = {
      status: "success",
      user: {
        email: "olivethotokunefor@gmail.com",
        name: "Oliveth Otokunefor",
        stack: "Express",
      },
      timestamp: new Date().toISOString(),
      fact: data.fact,
    };

    res.status(200).json(response);
  } catch (error) {
    const fallback = {
      status: "success",
      user: {
        email: "olivethotokunefor@gmail.com",
        name: "Oliveth Otokunefor",
        stack: "Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact right now.",
    };
    res.status(200).json(fallback);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
