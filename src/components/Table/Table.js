import React from 'react';
import './Table.css';

class Table extends React.Component{
    renderTable(){
        let rows = [];
        console.log(this.props.term);
        for(let i=0;i<this.props.term;i++){
            console.log(i);
            rows.push(<td className="Serie">{this.props.serie} &#8729; {i+1}</td>);
        }
        return rows;
    }
    
    render(){
        return <tr>{this.renderTable()}</tr>;
    }
}

export default Table;