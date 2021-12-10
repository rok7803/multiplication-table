import React from 'react';
import './Table.css';

class Table extends React.Component{
    renderTable(){
        let rows = [];
        //console.log(this.props.term);
        for(let i=0;i<this.props.term;i++){
            //console.log(i);
            if(this.props.square && this.props.serie > 0 && (i+1) / this.props.serie === 1){
                //multiplication dot: &#8729;
                rows.push(<td key={this.props.serie+(i+1)}
                className="Square">{this.props.serie*(i+1)}</td>);
            } else { 
                rows.push(<td key={this.props.serie+(i+1)} 
                className="Serie">{this.props.serie*(i+1)}</td>); 
            }
        }
        return rows;
    }
    
    render(){
        return <tr>{this.renderTable()}</tr>;
    }
}

export default Table;