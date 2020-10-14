import React from "react";
import styled from "styled-components";

const TablePanel = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.indent10};
  background-color: ${({ theme }) => theme.colors.panel};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  overflow-y: auto;
`;

const TableWrapper = styled.div`
  min-width: 350px;
  max-height: 500px;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const TableHead = styled.thead`
  th {
    padding: ${({ theme }) => theme.spacing.indent10} 0;
    border-bottom: 2px solid black;
    width: 25%;
    height: 40px;
  }
`;

const TableBody = styled.tbody`
  tr {
    height: 40px;
    padding: ${({ theme }) => theme.spacing.indent10} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
  }

  tr.flight-full {
    text-decoration: line-through;
  }

  tr:last-of-type {
    border: none;
  }
`;

function formatDuration(duration) {
  const hours = Number(duration.slice(0, 2));
  const minutes = Number(duration.slice(2));
  return `${hours}h ${minutes}m`;
}

function FlightsTable({ flights }) {
  if (!flights) {
    return null;
  }

  return (
    <TablePanel id="table-panel">
      {!!flights.length ? (
        <TableWrapper>
          <Table id="table">
            <TableHead>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Seats</th>
                <th>Duration</th>
              </tr>
            </TableHead>
            <TableBody>
              {flights.map((row, index) => (
                <tr key={index} className={row.seats === 0 && "flight-full"}>
                  <td>{row.date.toLocaleDateString()}</td>
                  <td>{row.price} CZK</td>
                  <td>{row.seats}</td>
                  <td>{formatDuration(row.duration)}</td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      ) : (
        "There are no flights"
      )}
    </TablePanel>
  );
}

export default FlightsTable;
