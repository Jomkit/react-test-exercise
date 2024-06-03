import { render, fireEvent } from "@testing-library/react";
import CoinToss from "./CoinToss";

it("should render without crashing", () => {
    render(<CoinToss />);
})

// snapshot test, contains expected static elements at start
it("matches snapshot", () => {
    const {asFragment} = render(<CoinToss />);
    expect(asFragment()).toMatchSnapshot();
})

it("should not render a coin image before pressing flip button", () => {
    const { container } = render(<CoinToss />);

    expect(container.querySelector("img")).not.toBeInTheDocument();
})

it("should render a coin image after pressing flip button", () => {
    const { container } = render(<CoinToss />);
    const flipBtn = container.querySelector("button");
    fireEvent.click(flipBtn);
    expect(container.querySelector("img")).toBeInTheDocument();
})