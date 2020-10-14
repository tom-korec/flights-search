import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
});

const AIRPORTS_API_URL = "/airports";
const FLIGHTS_API_URL = "/flights";

export async function fetchAirports() {
  const result = await api.get(AIRPORTS_API_URL);
  return result.data.map(({ AirportCityName, AirportName, AirportCode }) => ({
    city: AirportCityName,
    name: AirportName,
    code: AirportCode,
  }));
}

export async function fetchFlights(departure, arrival, date) {
  const [year, month] = date.split("-");
  try {
    const result = await api.get(FLIGHTS_API_URL, {
      params: {
        DEP: departure,
        ARR: arrival,
        MONTH_SEL: `${month}/${year}`,
        SECTOR_ID: 0,
        LANG: "en",
        ID_LOCATION: "cz",
      },
    });

    return result.data.calendarPriceList.dayList
      .filter((flight) => flight.status === "AVAILABLE")
      .map((flight) => ({ ...flight, date: new Date(flight.date) }));
  } catch (e) {
    console.error(e);
    return [];
  }
}
