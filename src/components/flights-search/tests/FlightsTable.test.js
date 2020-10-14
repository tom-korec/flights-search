import React from "react";
import { shallow } from "enzyme";

import FlightsTable from "../FlightsTable";

const tablePanelId = "#table-panel";
const tableId = "#table";

const flights = [
  {
    date: new Date("17-10-2020"),
    price: 868,
    seats: 9,
    duration: "0145",
  },
  {
    date: new Date("17-09-2020"),
    price: 444,
    seats: 1,
    duration: "0145",
  },
];

describe("<FlightsTable />", () => {
  it("should not render anything", () => {
    const component = shallow(<FlightsTable flights={null} />);
    expect(component.find(tablePanelId)).toHaveLength(0);
  });

  it("should render panel with text", () => {
    const component = shallow(<FlightsTable flights={[]} />);
    const tablePanel = component.find(tablePanelId);
    expect(tablePanel).toHaveLength(1);
    expect(tablePanel.text()).toEqual("There are no flights");
  });

  it("should render table", () => {
    const component = shallow(<FlightsTable flights={flights} />);
    const table = component.find(tableId);
    expect(table).toHaveLength(1);
    expect(table.children().at(1).children()).toHaveLength(2);
  });
});
