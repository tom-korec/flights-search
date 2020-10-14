import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { formatAirport } from "./FlightsSearch";

const styleProps = {
  inputWidth: "330px",
  inputHeight: "60px",
  fontSize: "1.1em",
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.minDesktop}) {
    width: ${styleProps.inputWidth};
  }
`;

const Label = styled.label`
  position: absolute;
  bottom: 50%;
  z-index: 9;
  width: 100%;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: ${styleProps.fontSize};
  line-height: 1em;
  transition: all 0.3s;
  transform: translateY(50%);
  ${({ moveLabel }) =>
    moveLabel &&
    `
    bottom: 44px;
    font-size: 0.8em;
  `}
`;
const Input = styled.input`
  width: 100%;
  height: ${styleProps.inputHeight};
  padding: 20px 15px 0;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  border: none;
  text-overflow: ellipsis;
  font-size: ${styleProps.fontSize};
`;

const AirportsList = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  top: ${styleProps.inputHeight};
  background: white;
  color: ${({ theme }) => theme.colors.dropdownText};
  padding: 0;
  max-height: 400px;
  overflow: auto;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

const AirportListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 6px 10px;
  :hover {
    background-color: #eff6ff;
  }
`;

function AirportInput({ id, label, airports, onSetAirport, airport }) {
  const [value, setValue] = useState(airport ? formatAirport(airport) : "");
  const [isListVisible, setListVisible] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState(airports);

  const timeout = useRef();

  useEffect(() => {
    if (airport) {
      setValue(formatAirport(airport));
    }
  }, [airport]);

  useEffect(() => {
    setFilteredAirports(
      airports.filter((airport) =>
        formatAirport(airport).toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value, airports]);

  return (
    <InputWrapper>
      <Label htmlFor={id} moveLabel={isListVisible || value}>
        {label}
      </Label>
      <Input
        autoComplete="off"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setValue("");
          setListVisible(true);
        }}
        onBlur={() => {
          timeout.current = setTimeout(() => {
            setValue(airport ? formatAirport(airport) : "");
            setListVisible(false);
          }, 150);
        }}
      />
      <AirportsList id="airports-list" visible={isListVisible}>
        {filteredAirports.map((airport) => {
          const { name, city, code } = airport;
          return (
            <AirportListItem
              key={code}
              id={code}
              value={code}
              onClick={() => {
                clearTimeout(timeout.current);
                onSetAirport(airport);
                setListVisible(false);
              }}
            >
              {city}, {name} ({code})
            </AirportListItem>
          );
        })}
      </AirportsList>
    </InputWrapper>
  );
}

export default AirportInput;
