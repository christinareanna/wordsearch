// // import { left } from "@popperjs/core";
// // import React, { useState } from "react";

// // export default function Search(gameBoard) {
// //     let word = "be";
// //     if (gameBoard.length === 0) return false;
// //     // left, up, right, down
// //     // const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];


// //     return (

// //     )
// // }

// import React, { useState, useEffect } from "react";
// import CellComponent from "../Grid/CellComponent";

// export default function Search(gameBoard, setGameBoard, startingGameBoard, letters) {
//     const answerWords = [
//         "fox",
//         "cat",
//         "dog",
//         "bird",
//         "bear",
//         "goat",
//     ]

//     const [found, setFound] = useState([]);
//     // const [isSelecting, setIsSelecting] = useState(false);
//     // const [selectedLetters, setSelectedLetters] = useState([]);
//     // const [markedLetters, setMarkedLetters] = useState([]);
//     // const pathNames = ["left2right", "right2left", "top2bottom", "bottom2top"];
//     // const [paths, setPaths] = useState(["left2right", "top2bottom"]);
//     const [markedLetters, setMarkedLetters] = useState([]);
//     // const [path, setPath] = useState();
//     // const [paths, setPaths] = useState(["left2right", "right2left", "top2bottom", "bottom2top"]);
//     // const [selectedLetters, setSelectedLetters] = useState([]);

//     const isInList = (searched, arr) => {
//         let found = false;

//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             if (searched === element) {
//                 found = true;
//                 break;
//             }
//         }
//         return found;
//     }


//     const isAnswer = (gameBoard) => {
//         const selectedWord = gameBoard.map((x) => x.letter).join("");
//         let found = false;
//         for (let i = 0; i < answerWords.length; i++) {
//             const element = answerWords[i];
//             if (selectedWord === element) {
//                 found = true;
//                 markedLetters(gameBoard);
//                 break;
//             }
//         }
//         return found;
//     };

//     const addToFound = (answerWords) => {
//         if (isInList(answerWords)) {
//             if (!isInList(answerWords)) {
//                 setFound([...found, answerWords]);
//                 // console.log(answerWords);
//             }
//             return answerWords
//         }
//     };



//     return (
//         <div>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//                 {answerWords.map((element) => {
//                     return (
//                         <span
//                             style={{
//                                 marginTop: 15,
//                                 marginLeft: 20,
//                                 marginRight: 20,
//                                 color: "black",
//                             }}
//                         >
//                             <h2
//                                 style={{
//                                     textDecoration: isInList(element, found)
//                                         ? "line-through"
//                                         : "none",
//                                 }}
//                             >
//                                 {element}
//                             </h2>
//                         </span>
//                     );
//                 })}
//             </div>
//             <CellComponent />
//         </div>
//     )
// }


// // import React from "react";
// // import Words from "./Words";

// // export default function validateSelection() {
// //     let found = []

// //     let prevCell = null;
// //     let currCell = null;
// //     let currSelection = null;

// //     function findCell(x, y){
// //     var col = Math.floor( (x - matrixX) / squareSize );
// //     var row = Math.floor( (y - matrixY) / squareSize );

// //     if (col < 0 || col >= cols || row < 0 || row >= rows )
// //         return null;

// //     return { row : row, col : col };
// // }
// // }