// import React from "react";
// import { getMergeSortAnimations } from "./SortingAlgorithms";
// import Button from "@material-ui/core/Button";
// import "./HomePage.css";

// // Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = 20;

// // Change this value for the number of bars (value) in the array.
// const NUMBER_OF_ARRAY_BARS = 100;

// // This is the main color of the array bars.
// const PRIMARY_COLOR = "#00f7ff";

// // This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = "red";

// export default class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//     };
//   }

//   componentDidMount() {
//     this.resetArray();
//   }

//   resetArray() {
//     const array = [];
//     for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
//       array.push(randomIntFromInterval(5, 650));
//     }
//     this.setState({ array });
//   }

//   mergeSort() {
//     const animations = getMergeSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName("array_bar");
//       const isColorChange = i % 3 !== 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
//   }

//   quickSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   heapSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   bubbleSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   // NOTE: This method will only work if your sorting algorithms actually return
//   // the sorted arrays; if they return the animations (as they currently do), then
//   // this method will be broken.

//   render() {
//     const { array } = this.state;

//     return (
//       <>
//         <section className="container_body">
//           <div className="container">
//             {array.map((value, idx) => (
//               <div
//                 className="array_bar"
//                 style={{ height: `${value}px` }}
//                 key={idx}
//               ></div>
//             ))}
//           </div>
//           <section className="button_section">
//             <Button
//               className="button"
//               variant="contained"
//               color="primary"
//               onClick={() => this.resetArray()}
//             >
//               Reset Array
//             </Button>
//             <Button
//               style={{ margin: "0px 10px" }}
//               variant="contained"
//               color="Secondary"
//               onClick={() => this.mergeSort()}
//             >
//               Merge Sort
//             </Button>
//             <Button
//               className="button"
//               variant="contained"
//               color="Secondary"
//               onClick={() => this.quickSort()}
//             >
//               Quick Sort
//             </Button>
//             <Button
//               style={{ margin: "0px 10px" }}
//               className="button"
//               variant="contained"
//               color="Secondary"
//               onClick={() => this.bubbleSort()}
//             >
//               Bubble Sort
//             </Button>
//             <Button
//               className="button"
//               variant="contained"
//               color="Secondary"
//               onClick={() => this.heapSort()}
//             >
//               Heap Sort
//             </Button>
//           </section>
//         </section>
//       </>
//     );
//   }
// }

// // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
