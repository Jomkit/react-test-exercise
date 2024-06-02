import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// Smoke test
it("should render without crashing", () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
})

// Snapshot test
it("should match snapshot", () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  expect(asFragment()).toMatchSnapshot();
})
// Should do a snapshot test after right arrow clicked?

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// Test bug 1: left arrow not working
it("works when you click on left arrow", function() {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />);

      
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();    

    /** SETUP DONE, NOW ACTUALLY TEST LEFT ARROW **/
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);
    expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
    expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();
})

// Test bug 2: being at edge of carousel queue throws error
it("should hide left arrow when at first image", () => {
    const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    expect(container.querySelector('.bi-arrow-left-circle')).toBeNull();
    expect(container.querySelector('.bi-arrow-right-circle')).toBeInTheDocument();
})

it("should hide right arrow when at last image", () => {
    const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    const rightArrow = container.querySelector('.bi-arrow-right-circle');
    fireEvent.click(rightArrow); // currCardIdx == 1
    fireEvent.click(rightArrow); // currCardIdx == 2, end
    expect(container.querySelector('.bi-arrow-right-circle')).toBeNull();
})