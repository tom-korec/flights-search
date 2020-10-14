import React from "react";
import { shallow } from "enzyme";

import AirportInput from "../AirportInput";

describe("<AirportInput />", () => {
  const airports = [
    {
      name: "Prague",
      code: "PRG",
      city: "Prague",
    },
    {
      name: "London",
      code: "LON",
      city: "London",
    },
  ];

  it("should render input", () => {
    const id = "inputId";
    const component = shallow(
      <AirportInput id={id} airports={airports} airport={[airports[0]]} />
    );
    expect(component.find(`#${id}`).at(0)).toHaveLength(1);
  });

  it("should render 2 list items", () => {
    const component = shallow(
      <AirportInput airports={airports} airport={[airports[0]]} />
    );
    expect(component.find("#airports-list").children()).toHaveLength(2);
  });
});
