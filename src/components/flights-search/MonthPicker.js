import React from "react";
import styled from "styled-components";
import { Row } from "../../styles/styles";

const DatePickerRow = styled(Row)`
  justify-content: flex-end;
  margin: 0;
`;

const Label = styled.label`
  margin-right: ${({ theme }) => theme.spacing.indent15};
  color: ${({ theme }) => theme.colors.backgroundText};
`;

const Input = styled.input`
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  border: none;
`;

function getMinDate() {
  const date = new Date();
  return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}`;
}

function MonthPicker({ value, onChange }) {
  return (
    <DatePickerRow>
      <Label htmlFor="month">Select month and year</Label>
      {/* type=month funguje iba v Chrome */}
      <Input
        id="month"
        type="month"
        value={value}
        min={getMinDate()}
        onChange={(e) => onChange(e.target.value)}
      />
    </DatePickerRow>
  );
}

export default MonthPicker;
