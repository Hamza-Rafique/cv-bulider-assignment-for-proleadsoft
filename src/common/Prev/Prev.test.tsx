import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Prev from "./index";

describe("Next Component", () => {
  test("calls handlePrevStep  when button is clicked", () => {
    const mockPrevStep = jest.fn();

    const { getByText } = render(<Prev handlePrevStep={mockPrevStep} />);

    const nextButton = getByText("GoBack");

    fireEvent.click(nextButton);

    expect(mockPrevStep).toHaveBeenCalled();
  });
});
