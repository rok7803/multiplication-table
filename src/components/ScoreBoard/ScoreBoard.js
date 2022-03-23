import React from 'react';
import './ScoreBoard.css';

class ScoreBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            multiplier: 0,
            serie: 0,
            result: 0,
            resultButton1: 0,
            resultButton2: 0,
            resultButton3: 0,
            counter: 0,
            countNumber: 1,
            counterBackward10: 10,
            counterBackward12: 12,
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            startExercise: false
        }
    }

    render(){
        return(
            <div className="Score-board-div">
                <h4>Score Board</h4>
                <table className="Score-board-table">
                </table>
            </div>
        );
    }
}

export default ScoreBoard;