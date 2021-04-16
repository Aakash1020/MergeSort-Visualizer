import React, { useEffect, useState } from "react";
import { getMergeSortAnimations } from "./SortingAlgorithms";
import Button from "@material-ui/core/Button";
import "./HomePage.css";

const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 450;

// This is the main color of the array bars.

// This is the color of array bars that are being compared throughout the animations.

const Visualizer = () => {
  const [array, setArray] = useState([]);
  //   const [mergeSort, setMergesort] = useState(false);
  //   const [heading, setHeading] = useState(null);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    setArray(array);
  };
  const refreshPage = () => {
    window.location.reload();
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    setArray(array);
  };
  useEffect(() => {
    resetArray();
  }, []);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array_bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "blue";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {};
  const bubbleSort = () => {};
  const heapSort = () => {};
  return (
    <>
      <section className="container_body">
        {/* <h2>{heading}</h2> */}
        <div className="container">
          {array.map((value, idx) => (
            <div
              className="array_bar"
              style={{ height: `${value}px` }}
              key={idx}
            ></div>
          ))}
        </div>
        <section className="button_section">
          {/* <Button
            style={{ margin: "0px 10px", display: "none" }}
            className="button"
            variant="contained"
            color="primary"
            onClick={resetArray}
          >
            Reset Array
          </Button> */}
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={refreshPage}
          >
            Reset Array
          </Button>
          <Button
            style={{ margin: "0px 10px" }}
            variant="contained"
            color="Secondary"
            onClick={mergeSort}
          >
            Merge Sort
          </Button>
          {/* <Button
            className="button"
            variant="contained"
            color="Secondary"
            onClick={quickSort}
          >
            Quick Sort
          </Button>
          <Button
            style={{ margin: "0px 10px" }}
            className="button"
            variant="contained"
            color="Secondary"
            onClick={bubbleSort}
          >
            Bubble Sort
          </Button>
          <Button
            className="button"
            variant="contained"
            color="Secondary"
            onClick={heapSort()}
          >
            Heap Sort
          </Button> */}
        </section>
      </section>
    </>
  );
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visualizer;
