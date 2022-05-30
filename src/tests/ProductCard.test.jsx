/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "../components/ProductCard";

describe("Test for product card component", () => {
  it("Should render products information", () => {
    render(<ProductCard/>);
    const product = screen.getByText("Misto quente");
    const price = screen.getByText("R$ 10,00");
    expect(product).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});