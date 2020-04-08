import React from 'react';
import './SetExercise.css';
import Exercise from '../Exercise/Exercise';


//let multiplier = -1;

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
            counterBackward10: 10,
            counterBackward12: 12
        }
        this.setMultiplier1 = this.setMultiplier1.bind(this);
        this.setMultiplier2 = this.setMultiplier2.bind(this);
        this.getResult = this.getResult.bind(this);
        //this.getRandomButton = this.getRandomButton.bind(this);
        //this.setButton1 = this.setButton1.bind(this);
        //this.setButton2 = this.setButton2.bind(this);
        //this.setButton3 = this.setButton3.bind(this);
        //this.handleResultButton1 = this.handleResultButton1.bind(this);
        //this.handleResultButton2 = this.handleResultButton2.bind(this);
        //this.handleResultButton3 = this.handleResultButton3.bind(this);
        //this.renderMultiplier1 = this.renderMultiplier1.bind(this);
        //this.renderMultiplier2 = this.renderMultiplier2.bind(this);
        this.nextExercise = this.nextExercise.bind(this);
        
        //this.stopExercise = this.stopExercise(this);
        //this.resetExercise = this.resetExercise.bind(this);
    }
    componentDidMount(){
        //this.setMultiplier1();
        //this.setMultiplier2();
        this.getResult();
        //this.getRandomButton();
        //this.setButton1();
        //this.setButton2();
        //this.setButton3();
        //console.log(this.state.result);
    }
    componentDidUpdate(prevState){
        //if(this.state.multiplier !== prevState.multiplier) this.getResult();
    }
    componentWillUnmount(){
        //this.setMultiplier1();
        //this.setMultiplier2();
        //this.getRandomButton();
        //this.setButton1();
        //this.setButton2();
        //this.setButton3();
    }
    setMultiplier1(){
        let serie;
        if(this.props.series.length > 1){
            let item = Math.floor(Math.random()*(this.props.series.length));
            serie = this.props.series[item];
            this.setState({serie: serie}/*, () => {serie = this.state.serie}*/);
            //console.log(this.state.serie);
        }
        //else this.setState({serie: this.props.series[0]}/*, () => {serie = this.state.serie;}*/);
        else{
            serie = this.props.series[0];
            this.setState({serie: serie});
        }
        //console.log('Serie: '+serie);
        return serie;
    }
    setMultiplier2(){
        let multiplier;
        if(this.props.direction === 1 && this.state.multiplier < this.props.term){
            multiplier = this.state.multiplier + this.props.step;
            this.setState({multiplier: multiplier}/*, () => {multiplier = this.state.multiplier}*/);
        }
        else if(this.props.direction === 2 && this.props.term === 10 && this.state.counter < this.props.term){
            this.setState({multiplier: Math.floor(Math.random()*10+1),
                counter: this.state.counter + 1
            });
        }
        else if(this.props.direction === 2 && this.props.term === 12 && this.state.counter < this.props.term){
            this.setState({multiplier: Math.floor(Math.random()*12+1), 
                counter: this.state.counter + 1
            });
        }
        else if(this.props.direction === 3 && this.props.term === 10 && this.state.counterBackward10 > 0){
            this.setState({multiplier: this.state.counterBackward10,
                counterBackward10: this.state.counterBackward10 - 1
            });
        }
        else if(this.props.direction === 3 && this.props.term === 12 && this.state.counterBackward12 > 0){
            this.setState({multiplier: this.state.counterBackward12,
                counterBackward12: this.state.counterBackward12 - 1
            });
        }
        //console.log(this.state.multiplier);
        return multiplier;
    }
    getResult(){
        //const result = await this.multiplication.call(this);
        //const newResult = await this.state.serie * this.state.multiplier;
        /*const serie = this.state.serie;
        const multiplier = this.state.multiplier;
        const result = serie * multiplier;*/
        //console.log(serie+'*'+multiplier+'='+result);
        //let multiplier = 0;
        const serie = this.setMultiplier1();
        const multiplier = this.setMultiplier2();
        const result = serie * multiplier;
        console.log('serie: '+serie+' multiplier: '+multiplier);
        this.setState({result: result},
            () => {console.log('State updated', this.state);});
        this.getRandomButton(result)
        //console.log('In getResult: '+this.state.result);
    }
    getRandomButton(result){
        /*this.setState({
            buttonArray: [...this.state.buttonArray, Math.floor(Math.random() * 3)]
        });
        this.setState({
            buttonArray: [...this.state.buttonArray, Math.floor(Math.random()*this.state.result+1)]
        });
        this.setState({
            buttonArray: [...this.state.buttonArray, Math.floor(Math.random()*this.state.result+1)]*/
        //}/*, () => console.log('this.state.buttonArray: '+this.state.buttonArray)*/);
        //console.log('this.state.buttonArray: '+this.state.buttonArray);
        //console.log('this.state.result: '+this.state.result);
        let buttonArray = [];
        buttonArray.push(Math.floor(Math.random() * 3));
        buttonArray.push(Math.floor(Math.random()*result+1));
        buttonArray.push(Math.floor(Math.random()*result+1));
        //this.setState({buttonArray: newArray}, () => {console.log('this.state.buttonArray: '+this.state.buttonArray);});
        //console.log('Inside getRandomButton()')
        this.setButton1(buttonArray, result);
        this.setButton2(buttonArray, result);
        this.setButton3(buttonArray, result);
        //return this.state.buttonArray;
    }
    async setButton1(buttonArray, result){
        //console.log('result: '+result);
        console.log(buttonArray);
        //console.log('Inside setButton1');
        if(buttonArray[0] === 0) await this.setState({resultButton1: result})
        else if(buttonArray[0] === 1) await this.setState({resultButton1: result + buttonArray[1]});
        else if(buttonArray[0] === 2) await this.setState({resultButton1: result - buttonArray[2]});
        console.log(this.state.resultButton1);
        console.log(this.state.resultButton2);
        console.log(this.state.resultButton3);
    }
    async setButton2(buttonArray, result){
        if(buttonArray[0] === 1) await this.setState({resultButton2: result})
        else if(buttonArray[0] === 2) await this.setState({resultButton2: result + buttonArray[1]});
        else if(buttonArray[0] === 0) await this.setState({resultButton2: result - buttonArray[2]});
    }
    async setButton3(buttonArray, result){
        if(buttonArray[0] === 2) await this.setState({resultButton3: result})
        else if(buttonArray[0] === 0) await this.setState({resultButton3: result + buttonArray[1]});
        else if(buttonArray[0] === 1) await this.setState({resultButton3: result - buttonArray[2]});
    }
    nextExercise(){
        this.getResult();
    }
    resetExercise(){
        this.setState({
            multiplier: 0,
            serie: 0,
            result: 0,
            resultButton1: 0,
            resultButton2: 0,
            resultButton3: 0,
            counterBackward10: 10,
            counterBackward12: 12
        });
        this.getResult();
    }
    stopExercise(){
        alert('You did it!');
        this.resetExercise();
    }
    render(){
        return(
            <table className="Exercise-table">
                <Exercise 
                    serie={this.state.serie} 
                    multiplier={this.state.multiplier}
                    result={this.state.result}
                    button1={this.state.resultButton1}
                    button2={this.state.resultButton2}
                    button3={this.state.resultButton3}
                    nextExercise={this.nextExercise}
                    stopExercise={this.stopExercise}
                    term={this.props.term}
                    />
            </table>
        );
    }
}

export default SetExercise;