import { render, screen } from '@testing-library/react';
import Greet from "./";

// test("greet renders", () => {
//     render(<Greet />);
//     const element = screen.getByText(/greetings/i);
//     expect(element).toBeInTheDocument();
// })

// describe("Greet", () => {
//     test("greet renders", () => {
//         render(<Greet />);
//         const element = screen.getByText(/greetings/i);
//         expect(element).toBeInTheDocument();
//     })

//     test("greet renders with name", () => {
//         render(<Greet name="Name" />);
//         const element = screen.getByText("Greetings Name");
//         expect(element).toBeInTheDocument();
//     })
// })

// describe.skip("Greet", () => {
//     test("greet renders", () => {
//         render(<Greet />);
//         const element = screen.getByText("Greetings");
//         expect(element).toBeInTheDocument();
//     })

//     describe('Nested', () => {
//         test("greet renders with name", () => {
//             render(<Greet name="Name" />);
//             const element = screen.getByText("Greetings Name");
//             expect(element).toBeInTheDocument();
//         })
//     })
// })

test("element renders correctly", () => {
    render(<Greet />);
    const inputElement = screen.getByRole("textbox", {
        name: "Email"
    });
    expect(inputElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const skillElement = screen.getAllByRole("listitem");
    expect(skillElement).toHaveLength(4);

    const textElement = screen.getByText("text match", { exact: false });
    expect(textElement).toBeInTheDocument();

    const textElement2 = screen.getByText(/xt Mat/i);
    // /string/ (matches subsctring), /string/i (ignore case), /^string$/ (matches whole string)
    expect(textElement2).toBeInTheDocument();

    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();

    const learningBtn = screen.queryByRole("button", { name: "Start Learning" });
    expect(learningBtn).not.toBeInTheDocument();
});

test("async element rendered correctly", async () => {
    render(<Greet />);

    const logoutBtn = await screen.findByRole("button", { name: "Logout" }, { timeout: 1200 });
    expect(logoutBtn).toBeInTheDocument();
});

// Like getByRole, there are other more methods offered by RTL
// queryBy, findBy, queryByAll, findByAll