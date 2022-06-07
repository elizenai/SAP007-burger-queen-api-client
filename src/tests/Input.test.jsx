/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Input} from "./";

describe("Input Component", () => {

  it("Render a input", () => {
    render(<Input placeholder="Digite seu email" />);
    const input = screen.getByPlaceholderText("Digite seu email");
    expect(input).toBeInTheDocument();
  });
});