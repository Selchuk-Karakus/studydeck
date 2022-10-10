import React from "react";
import { render, act } from "@testing-library/react";
import App from "../App";
import mockCards from "./mocks/MockResponse";
import { getCards } from "../service/cardService";

jest.mock("../service/cardService");
describe("should render App component", () => {
  it("Renders cards from the API", async () => {
    getCards.mockResolvedValue(mockCards);

    let getByText;
    await act(async () => {
      ({ getByText } = render(<App />));
    });

    mockCards.forEach((card) => {
      expect(getByText(card.term)).toBeInTheDocument();
    });
  });
});
