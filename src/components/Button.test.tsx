import { render } from "vitest-browser-react";
import { Button } from "./Button";
import { describe, it, expect, vi } from "vitest";
import { page } from "@vitest/browser/context";

describe("Button", () => {
  it("renders with default text", () => {
    render(<Button />);
    expect(page.getByRole("button")).toHaveTextContent("Button");
  });

  it("renders with custom text", () => {
    render(<Button>Click me</Button>);
    expect(page.getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} />);

    await page.getByRole("button").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
