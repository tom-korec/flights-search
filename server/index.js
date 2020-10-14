const axios = require("axios");
const express = require("express");
const app = express();

const AIRPORTS_API_URL =
  "https://www.csa.cz/Umbraco/Api/DestinationCache/GetAllDestinations/?destinations_language=en";
const FLIGHTS_API_URL =
  "https://www.csa.cz/Umbraco/Api/CalendarPricesCache/GetPrices/";

app.get("/airports", async (req, res) => {
  const result = await axios.get(AIRPORTS_API_URL);
  res.send(result.data);
});

app.get("/flights", async (req, res) => {
  const result = await axios.get(FLIGHTS_API_URL, {
    params: req.query
  });
  res.send(result.data);
});

app.listen(4000);
