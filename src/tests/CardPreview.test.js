import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardPreview from "../components/CardPreview";

describe("should render CardPreview component", () => {
  it("Renders the expected term", () => {
    // ARRANGE
    const expectedTerm = "What does a duck say";

    // ACT
    const { getByText } = render(<CardPreview term={expectedTerm} />);

    // ASSERT
    expect(getByText(expectedTerm)).toBeInTheDocument();
  });
});

describe("should interact CardPreview component upon show button click", () => {
  it("Flips the card to reveal the definition", () => {
    const expectedTerm = "This is the term";
    const expectedDef = "This is the definition";

    const { getByText, queryByText } = render(
      <CardPreview term={expectedTerm} definition={expectedDef} />
    );

    const flipButton = getByText(/show/i);
    fireEvent.click(flipButton);

    expect(getByText(expectedDef)).toBeInTheDocument();
    expect(queryByText(expectedTerm)).not.toBeInTheDocument();
  });
});
