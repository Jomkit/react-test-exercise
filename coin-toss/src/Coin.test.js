import { render } from "@testing-library/react"
import Coin from "./Coin"
// import heads from "./assets/heads.jpg"
// import tails from "./assets/tails.jpg"

// smoke test
it('should render without crashing', () => {
    render(<Coin face="heads" />);
})

// snapshot test
it("matches snapshot heads", () => {
    const { asFragment } = render(<Coin face="heads" />);
    expect(asFragment()).toMatchSnapshot();
})
it("matches snapshot tails", () => {
    const { asFragment } = render(<Coin face="tails" />);
    expect(asFragment()).toMatchSnapshot();
})