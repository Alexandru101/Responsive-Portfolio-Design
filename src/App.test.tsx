import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("loads homepage", () => {
    window.history.pushState({}, "", "/home");

    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
