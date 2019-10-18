import React from "react";
import StarRating from "./StarRating";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders 5 stars by default", () => {
  const { getAllByTestId } = render(<StarRating />);
  const starCount = getAllByTestId("stars");
  expect(starCount).toHaveLength(5);
});

it("renders a specified number of stars", () => {
  // test the starCount prop
  const { getAllByTestId } = render(<StarRating starCount={7} />);
  const starCount = getAllByTestId("stars");
  expect(starCount).toHaveLength(7);
});

it("renders empty stars with color #bbb by default", () => {
  const { container, getAllByTestId } = render(
    <StarRating starCount={5} value={0} onClick={() => {}} />
  );
  const bbbstars = getAllByTestId("stars");
  expect(bbbstars[0].querySelector("svg").getAttribute("color")).toBe("#bbb");
});

it("renders empty stars with the color of the emptyColor value", () => {
  const { container, getAllByTestId } = render(
    <StarRating starCount={5} value={0} emptyColor={"red"} onClick={() => {}} />
  );
  const bbbstars = getAllByTestId("stars");
  expect(bbbstars[0].querySelector("svg").getAttribute("color")).toBe("red");
});

it("renders filled stars as yellow by default", () => {
  const { container, getAllByTestId } = render(
    <StarRating
      filledColor={"yellow"}
      starCount={5}
      value={5}
      onClick={() => {}}
    />
  );
  const filledstars = getAllByTestId("stars");
  expect(filledstars[4].querySelector("svg").getAttribute("color")).toBe(
    "yellow"
  );
});

it("renders filled stars with the color of the filledColor value", () => {
  const { container, getAllByTestId } = render(
    <StarRating
      filledColor={"blue"}
      starCount={5}
      value={5}
      onClick={() => {}}
    />
  );
  const filledstars = getAllByTestId("stars");
  expect(filledstars[4].querySelector("svg").getAttribute("color")).toBe(
    "blue"
  );
});

it("renders a star using the 1x size by default", () => {
  const { container, getAllByTestId } = render(
    <StarRating starCount={1} value={1} onClick={() => {}} />
  );
  const size = getAllByTestId("stars");
  expect(size[0].querySelector("svg")).toHaveClass("fa-1x");
});

it("renders a star using the size value", () => {
  const { container, getAllByTestId } = render(
    <StarRating size={"6x"} starCount={1} value={1} onClick={() => {}} />
  );
  const size = getAllByTestId("stars");
  expect(size[0].querySelector("svg")).toHaveClass("fa-6x");
});

it("renders 0 filled stars when value is 0", () => {
  const { container, getAllByTestId } = render(
    <StarRating
      filledColor={"blue"}
      starCount={5}
      value={0}
      onClick={() => {}}
    />
  );
  const filledstars = getAllByTestId("stars");
  expect(filledstars.toHaveValue(
    0
  );
});

it("renders filled stars equal to value when value is greater than 0", () => {
  const { container, getAllByTestId } = render(
    <StarRating
      filledColor={"blue"}
      starCount={5}
      value={""}
      onClick={() => {}}
    />
  );
  const filledstars = getAllByTestId("stars");
  expect(filledstars[4].querySelector("svg").getAttribute("value")).toHaveValue(
    4
  );
});

it("updates when clicking on an empty star", () => {
  const onClickHandler = jest.fn();
  const { container, getAllByTestId } = render(
    <StarRating starCount={5} value={0} onClick={onClickHandler} />
  );

  const stars = getAllByTestId("stars");
  const star1 = stars[0];
  fireEvent.click(star1);

  expect(onClickHandler).toHaveBeenCalledWith(1);
});

it("sets the value to 0 when clicking on a filled star", () => {
  const onClickHandler = jest.fn();
  const { container, getAllByTestId } = render(
    <StarRating starCount={5} value={5} onClick={onClickHandler} />
  );

  const stars = getAllByTestId("stars");
  const star1 = stars[0];
  fireEvent.click(star1);

  expect(onClickHandler).toHaveBeenCalledWith(0);
});
