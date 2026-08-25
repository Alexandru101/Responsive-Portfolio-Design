import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import '@testing-library/jest-dom/vitest';

describe("App", () => {
  it("loads homepage", () => {
    class IntersectionObserverMock {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = vi.fn(() => []);
    }

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

    window.history.pushState({}, "", "/home");

    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
