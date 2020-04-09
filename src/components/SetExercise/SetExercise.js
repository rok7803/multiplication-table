import React from 'react';
import './SetExercise.css';
import Exercise from '../Exercise/Exercise';

class SetExercise extends React.Component{
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
        this.setSerie = this.setSerie.bind(this);
        this.setMultiplier = this.setMultiplier.bind(this);
        this.getResult = this.getResult.bind(this);
        this.startExercise = this.startExercise.bind(this);
        this.nextExercise = this.nextExercise.bind(this);
        this.stopExercise = this.stopExercise.bind(this);
        this.resetExercise = this.resetExercise.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        //this.resetTimer = this.resetTimer.bind(this);
    }
    componentDidMount(){
        this.getResult();
        //console.log('In componentDidMount');
    }
    componentWillUnmount(){
        //console.log('In componentWillUnmount');
    }
    setSerie(){
        let serie;
        if(this.props.series.length > 1){
            let item = Math.floor(Math.random()*(this.props.series.length));
            serie = this.props.series[item];
            this.setState({serie: serie});
            //console.log('In ifthis.state.serie: ',this.state.serie);
        }
        else{
            serie = this.props.series[0];
            this.setState({serie: serie});
        }
        //console.log('Serie: '+serie);
        return serie;
    }
    setMultiplier(){
        let multiplier, counter, counterBackward10, counterBackward12;
        if(this.props.direction === 1 && this.state.multiplier < this.props.term){
            multiplier = this.state.multiplier + this.props.step;
            this.setState({multiplier: multiplier}/*, () => {multiplier = this.state.multiplier}*/);
        }
        else if(this.props.direction === 2 && this.props.term === 10 && this.state.counter < this.props.term){
            multiplier = Math.floor(Math.random()*10+1);
            counter = this.state.counter + 1;
            this.setState({
                multiplier: multiplier,
                counter: counter
            });
        }
        else if(this.props.direction === 2 && this.props.term === 12 && this.state.counter < this.props.term){
            multiplier = Math.floor(Math.random()*12+1);
            counter = this.state.counter + 1;
            this.setState({
                multiplier: multiplier, 
                counter: counter
            });
        }
        else if(this.props.direction === 3 && this.props.term === 10 && this.state.counterBackward10 > 0){
            multiplier = this.state.counterBackward10;
            counterBackward10 = this.state.counterBackward10 -1 ;
            this.setState({
                multiplier: multiplier,
                counterBackward10: counterBackward10
            });
        }
        else if(this.props.direction === 3 && this.props.term === 12 && this.state.counterBackward12 > 0){
            multiplier = this.state.counterBackward12;
            counterBackward12 = this.state.counterBackward12 - 1;
            this.setState({multiplier: multiplier,
                counterBackward12: counterBackward12
            });
        }
        //console.log('multiplier: '+multiplier);
        return multiplier;
    }
    getResult(){     
        const serie = this.setSerie();
        const multiplier = this.setMultiplier();
        const result = serie * multiplier;
        //console.log('serie: '+serie+' multiplier: '+multiplier+' result: '+result);
        this.setState({
            result: result,
            countNumber: 1
        }/*,
            () => {console.log('State updated: ', this.state);}*/);
        this.getRandomButton(result)
        //console.log('In getResult(this.state.result): '+this.state.result);
    }
    getRandomButton(result){
        let buttonArray = [];
        buttonArray.push(Math.floor(Math.random() * 3));
        buttonArray.push(Math.floor(Math.random()*result+1));
        buttonArray.push(Math.floor(Math.random()*result+1));
        
        //console.log('In getRandomButton')
        this.setButton1(buttonArray, result);
        this.setButton2(buttonArray, result);
        this.setButton3(buttonArray, result);
        
    }
    setButton1(buttonArray, result){
        let resultPlus, resultMinus;
        //console.log('buttonArray: '+buttonArray);
        //console.log('In setButton1');
        if(buttonArray[0] === 0) this.setState({resultButton1: result});
        else if(buttonArray[0] === 1){
            resultPlus = result + buttonArray[1];
            this.setState({resultButton1: resultPlus});
        }
        else if(buttonArray[0] === 2){
            resultMinus = result - buttonArray[2];
            this.setState({resultButton1: resultMinus});
        }
        //console.log('this.state.resultButton1: '+this.state.resultButton1);
        //console.log(('this.state.resultButton2: '+this.state.resultButton2);
        //console.log(('this.state.resultButton3: '+this.state.resultButton3);
    }
    setButton2(buttonArray, result){
        let resultPlus, resultMinus;
        if(buttonArray[0] === 1) this.setState({resultButton2: result});
        else if(buttonArray[0] === 2){
            resultPlus = result + buttonArray[1];
            this.setState({resultButton2: resultPlus});
        }
        else if(buttonArray[0] === 0){
            resultMinus = result - buttonArray[2];
            this.setState({resultButton2: resultMinus});
        }
    }
    setButton3(buttonArray, result){
        let resultPlus, resultMinus;
        if(buttonArray[0] === 2) this.setState({resultButton3: result})
        else if(buttonArray[0] === 0){
            resultPlus = result + buttonArray[1];
            this.setState({resultButton3: resultPlus});
        }
        else if(buttonArray[0] === 1){
            resultMinus = result - buttonArray[2];
            this.setState({resultButton3: resultMinus});
        }
    }
    startExercise(){
        //if(this.state.startExercise){
            /*this.setState({
                multiplier: 0,
                startExercise: true
            }, () => {
                console.log('Callback this.setState (this.state.multiplier): ', this.state.multiplier);
                /*this.getResult();*///});
            this.startTimer();
        /*}
        else{
            this.setState({
                multiplier: -1,
                startExercise: false
            }, () => {this.getResult();});
        }*/
        console.log('In startExercise (this.state.multiplier): ', this.state.multiplier);
    }
    nextExercise(){
        this.getResult();
    }
    stopExercise(){
        this.stopTimer();
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        //let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        alert('You did it! Your time: '+minutes+':'+seconds+':'+centiseconds);
        this.resetExercise();
    }
    resetExercise(){
        this.stopTimer();
        this.setState({
            multiplier: 0,
            serie: 0,
            result: 0,
            resultButton1: 0,
            resultButton2: 0,
            resultButton3: 0,
            counter: 0,
            countNumber: 0,
            counterBackward10: 10,
            counterBackward12: 12,
            timerStart: 0,
            timerTime: 0
        }, () => {this.getResult();});       
    }
    startTimer(){
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    }
    stopTimer(){
        this.setState({timerOn: false});
        clearInterval(this.timer);
    }
    /*resetTimer(){
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    }*/
    render(){
        return(
            <div className="Exercise-div">
                <table className="Exercise-table">
                    <Exercise 
                        serie={this.state.serie} 
                        multiplier={this.state.multiplier}
                        result={this.state.result}
                        button1={this.state.resultButton1}
                        button2={this.state.resultButton2}
                        button3={this.state.resultButton3}
                        startExercise={this.startExercise}
                        nextExercise={this.nextExercise}
                        stopExercise={this.stopExercise}
                        term={this.props.term}
                        count={this.state.countNumber}
                        reset={this.resetCountNumber}
                        />
                </table>
                <div className="Exercise-button">
                    <button onClick={this.resetExercise}>Reset</button>
                    <button onClick={this.props.settingsOn}>Show Settings</button>
                </div>
            </div>
        );
    }
}

export default SetExercise;