import { render, screen } from "@testing-library/react";
import Counter from ".";
import user from "@testing-library/user-event";

describe("Counter", () => {

    test("renders correctly", () => {
        render(<Counter />);
        const counterElement = screen.getByRole("heading", { level: 2 });
        const incrementButton = screen.getByRole("button", { name: "Increment" });
        expect(counterElement).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
    });

    test("renders a initial count of 0", () => {
        render(<Counter />);
        const counterElement = screen.getByRole("heading", { level: 2 });
        expect(counterElement).toHaveTextContent("0");
    });

    test("updates with 1 on click", async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole("button", { name: "Increment" });
        await user.click(incrementButton); // dblClick, tripleClick, hover, unhover
        const counterElement = screen.getByRole("heading", { level: 2 });
        expect(counterElement).toHaveTextContent("1");
    });
});

describe("Amount", () => {
    test("renders correctly", () => {
        render(<Counter />);
        const amountElement = screen.getByRole("heading", { level: 3 });
        expect(amountElement).toBeInTheDocument();
        const amountInput = screen.getByRole("spinbutton");
        expect(amountInput).toBeInTheDocument();
        const setAmountBtn = screen.getByRole("button", { name: "Set Amount" });
        expect(setAmountBtn).toBeInTheDocument();
    });

    test("renders a initial amount 0", () => {
        render(<Counter />);
        const amountElement = screen.getByRole("heading", { level: 3 });
        expect(amountElement).toHaveTextContent("0");
        const amountInput = screen.getByRole("spinbutton");
        expect(amountInput).toHaveValue(0);
    });

    test("updates counter and amount on click of set amount", async () => {
        user.setup();
        render(<Counter />);
        
        const amountInput = screen.getByRole("spinbutton");
        await user.type(amountInput, "20")
        expect(amountInput).toHaveValue(20);

        const amountElement = screen.getByRole("heading", { level: 3 });
        expect(amountElement).toHaveTextContent("20");

        const setAmountBtn = screen.getByRole("button", { name: "Set Amount" });
        await user.click(setAmountBtn);

        const counterElement = screen.getByRole("heading", { level: 2 });
        expect(counterElement).toHaveTextContent("20");
    });
});

test("elements gets focus on tab", async () => {
    user.setup();
    render(<Counter />);
    
    await user.tab();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toHaveFocus();

    await user.tab();
    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toHaveFocus();

    await user.tab();
    const setAmountBtn = screen.getByRole("button", { name: "Set Amount" });
    expect(setAmountBtn).toHaveFocus();
});