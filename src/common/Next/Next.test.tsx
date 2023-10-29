import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Next from "./index";

describe("Next Component", () => {
  test("calls onNextStep when button is clicked", () => {
    const mockNextStep = jest.fn();

    const { getByText } = render(<Next onNextStep={mockNextStep} />);

    const nextButton = getByText("Next");

    fireEvent.click(nextButton);

    expect(mockNextStep).toHaveBeenCalled();
  });
});
