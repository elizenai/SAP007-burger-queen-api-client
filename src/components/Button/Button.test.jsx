import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button Component", () => {
  
  it("Render a button correctly", () => {
    render(<Button />);
    const btn = screen.getByRole("btnText", { name: /Entrar/i });
    expect(btn).toBeInTheDocument();
  });
});