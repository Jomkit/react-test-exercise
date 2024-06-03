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

it("should increment heads", () => {
    jest.spyOn(Math, "random")
        .mockReturnValueOnce(1.0)
        .mockReturnValueOnce(1.0);
    
    const { container } = render(<CoinToss />);
    const flipBtn = container.querySelector("button");
    fireEvent.click(flipBtn);
    expect(container.querySelector('p')).toContainHTML("Out of 1 flips, there have been 1 heads and 0 tails");
    fireEvent.click(flipBtn);
    expect(container.querySelector('p')).toContainHTML("Out of 2 flips, there have been 2 heads and 0 tails");
})

it("should increment tails", () => {
    jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(1.0);
    
    const { container } = render(<CoinToss />);
    const flipBtn = container.querySelector("button");
    fireEvent.click(flipBtn);
    expect(container.querySelector('p')).toContainHTML("Out of 1 flips, there have been 0 heads and 1 tails");
    fireEvent.click(flipBtn);
    expect(container.querySelector('p')).toContainHTML("Out of 2 flips, there have been 0 heads and 2 tails");
    fireEvent.click(flipBtn);
    expect(container.querySelector('p')).toContainHTML("Out of 3 flips, there have been 1 heads and 2 tails");
})