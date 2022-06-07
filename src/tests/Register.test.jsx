/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Register from "./";

describe("Page Register", ()=> {

  it("To Be a Function", () => {
    expect(typeof Register).toBe("const");
  });

  it("dispare function Click", () => {
    const text = "Cadastrar";
    const onClick = jest.fn();
    render(<button onClick={handleSubmit}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
