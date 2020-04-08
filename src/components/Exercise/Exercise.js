import React from 'react';
import './Exercise.css';

class Exercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

        this.handleResultButton1 = this.handleResultButton1.bind(this);
        this.handleResultButton2 = this.handleResultButton2.bind(this);
        this.handleResultButton3 = this.handleResultButton3.bind(this);
    }
    handleResultButton1(event){
        let count;
        if(this.props.result === this.props.button1){
            this.props.nextExercise();
            count = this.state.count + 1;
            this.setState({count: count})
        }
        else alert('Try Again!');
        if(this.state.count === 9){
            this.setState({count: 0})
            this.props.stopExercise();
        }
        //console.log(this.props.result+' '+this.props.button1);
        console.log('handleResultButtonx: '+this.state.count);
        event.preventDefault();
    }
    handleResultButton2(event){
        let count;
        if(this.props.result === this.props.button2){
            this.props.nextExercise();
            count = this.state.count + 1;
            this.setState({count: count})
        }
        else alert('Try Again!');
        if(this.state.count === 9){
            this.setState({count: 0})
            this.props.stopExercise();
        }
        //console.log(this.props.result+' '+this.props.button2);
        console.log('handleResultButtonx: '+this.state.count);
        event.preventDefault();
    }
    handleResultButton3(event){
        let count;
        if(this.props.result === this.props.button3){
            this.props.nextExercise();
            count = this.state.count + 1;
            this.setState({count: count})
        }
        else alert('Try Again!');
        if(this.state.count === 9){
            this.setState({count: 0})
            this.props.stopExercise();
        }
        //console.log(this.props.result+' '+this.props.button3);
        console.log('handleResultButtonx: '+this.state.count);
        event.preventDefault();
    }
    renderMultiplier1(){
        return <td className="Multiplier Exercise-table-field">{this.props.serie}</td>
    }
    renderMultiplier2(){
        return <td className="Multiplier Exercise-table-field">{this.props.multiplier}</td>
    }
    renderButton1(){
        return <td className="Exercise-table-field"><button onClick={this.handleResultButton1}>{this.props.button1}</button></td>
    }
    renderButton2(){
        return <td className="Exercise-table-field"><button onClick={this.handleResultButton2}>{this.props.button2}</button></td>
    }
    renderButton3(){
        return <td className="Exercise-table-field"><button onClick={this.handleResultButton3}>{this.props.button3}</button></td>
    }
    render(){
        return(
            <tbody>
                <tr>
                    {this.renderMultiplier1()}
                    <td className="Multiplier Exercise-table-field">&#8729;</td>
                    {this.renderMultiplier2()}
                </tr>
                <tr>
                    {this.renderButton1()}
                    {this.renderButton2()}
                    {this.renderButton3()}                        
                </tr>
            </tbody>
        );
    }
}

export default Exercise;