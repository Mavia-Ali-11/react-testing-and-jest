import { render, screen } from '@testing-library/react';
import Greet from "./";

test("greet renders", () => {
    render(<Greet />);
    const element = screen.getByText("Greetings");
    expect(element).toBeInTheDocument();
})

test("greet renders with name", () => {
    render(<Greet name="Name" />);
    const element = screen.getByText("Greetings Name");
    expect(element).toBeInTheDocument();
})