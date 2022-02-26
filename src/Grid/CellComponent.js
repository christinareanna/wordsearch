import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import CellComponent from './CellComponent';

export default function CellComponent() {

    function randomLetter() {
        const letters = 'abcdefghijklmnoprstuvwy';
        return letters.charAt(Math.floor(Math.random() * letters.length));
    }

    const startingGameBoard = Array(10).fill().map(() => Array(10).fill().map(() => ({
        value: randomLetter(),
        selected: false,
    })))

    const [gameBoard, setGameBoard] = useState(startingGameBoard);
    // const [path, setPath] = useState();

    const white = "#FFFFFF";
    const coral = "#FF7F50";


    function handleColorChange(e, rowIdx, colIdx) {
        e.preventDefault();

        const gb = gameBoard.slice();
        gb[rowIdx][colIdx].selected = !gb[rowIdx][colIdx].selected;
        setGameBoard(gb);
    }


    


    return (
        <Container className='grid'>
            {gameBoard.map((row, rI) =>
                <Row className='row' key={rI}>
                    {row.map((v, cI) =>
                        <Col>
                            <button
                                style={{ backgroundColor: v.selected ? coral : white, fontFamily: "monospace", fontSize: "16px", border: "none" }}
                                color={v.selected ? coral : white}
                                index={cI}
                                onClick={(e) => handleColorChange(e, rI, cI)}
                                key={cI}>{v.value}</button></Col>
                    )}
                </Row>
            )}
        </Container>
    )
}