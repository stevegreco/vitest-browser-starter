import { page } from "@vitest/browser/context";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./Button";

describe("Button", () => {
	it("renders with default text", async () => {
		render(<Button>Button</Button>);
		await expect.element(page.getByRole("button")).toHaveTextContent("Button");
	});

	it("renders with custom text", async () => {
		render(<Button>Click me</Button>);
		await expect
			.element(page.getByRole("button"))
			.toHaveTextContent("Click me");
	});

	it("calls onClick handler when clicked", async () => {
		const handleClick = vi.fn();

		render(<Button onPress={handleClick}>Save</Button>);

		await page.getByRole("button").click();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
