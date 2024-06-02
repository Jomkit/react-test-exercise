import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

// Smoke test
it("should render without crashing", () => {
    const card1 = TEST_IMAGES[0];
    render(<Card caption={card1.caption} src={card1.src} currNum={1} totalNum={3} />);
})

// Snapshot test
it("should match snapshot", () => {
    const card1 = TEST_IMAGES[0];
    const {asFragment} = render(<Card caption={card1.caption} src={card1.src} currNum={1} totalNum={3} />);

    expect(asFragment()).toMatchSnapshot();
})