import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchAirports, fetchFlights } from "../../api";

import AirportInput from "./AirportInput";
import SwitchButton from "./SwitchButton";
import MonthPicker from "./MonthPicker";
import FlightsTable from "./FlightsTable";
import Loader from "../common/Loader";
import { fadeInEffect, Panel, Row } from "../../styles/styles";

const AirportsRow = styled(Row)`
  padding-left: -${({ theme }) => theme.spacing.indent15};
  padding-right: -${({ theme }) => theme.spacing.indent15};
`;

const MonthPickerRow = styled(Row)`
  ${fadeInEffect}
  @media (min-width: ${({ theme }) => theme.breakpoints.minDesktop}) {
    justify-content: flex-end;
  }
`;

const TableRow = styled(Row)`
  ${fadeInEffect}
`;

export function formatAirport({ name, code, city }) {
  return `${city}, ${name} (${code})`;
}

function withLoading(setLoading, asyncFunction) {
  setLoading(true);
  asyncFunction().then(() => setLoading(false));
}

function FlightsSearch() {
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadFlights = async () => {
    const flights = await fetchFlights(departure.code, arrival.code, date);
    setFlights(flights);
  };

  useEffect(() => {
    withLoading(setLoading, async () => {
      const airports = await fetchAirports();
      setAirports(airports);
      setDeparture(airports.find((a) => a.code === "PRG"));
    });
  }, []);

  useEffect(() => {
    if (date && arrival && departure) {
      withLoading(setLoading, loadFlights);
    }
  }, [date, arrival, departure]);

  const switchAirports = () => {
    const tmp = departure;
    setDeparture(arrival);
    setArrival(tmp);
  };

  return (
    <Panel>
      <Loader loading={loading} />
      <AirportsRow>
        <AirportInput
          id="departure"
          label="Departure"
          airports={
            arrival
              ? airports.filter((airport) => airport.code !== arrival.code)
              : airports
          }
          airport={departure}
          onSetAirport={setDeparture}
        />

        <SwitchButton visible={!!arrival} onClick={switchAirports} />
        <AirportInput
          id="arrival"
          label="Arrival"
          airports={
            departure
              ? airports.filter((airport) => airport.code !== departure.code)
              : airports
          }
          airport={arrival}
          onSetAirport={setArrival}
        />
      </AirportsRow>
      <MonthPickerRow visibility={!!arrival}>
        <MonthPicker
          value={date}
          onChange={(date) => {
            setDate(date);
          }}
        />
      </MonthPickerRow>
      <TableRow visibility={!!flights} fadeInTime="0.5s">
        <FlightsTable flights={flights} />
      </TableRow>
    </Panel>
  );
}

export default FlightsSearch;
