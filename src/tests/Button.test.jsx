/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Button} from "../components/Button";

describe("Button Component", () => {
  
  it("Render a button correctly", () => {
    render(<Button>Entrar</Button>);
    const btn = screen.getByText("Entrar");
    expect(btn).toBeInTheDocument();
  });
});