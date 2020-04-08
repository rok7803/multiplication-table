import React from 'react';
import './SetTable.css';
import Table from '../Table/Table';

class SetTable extends React.Component{
    render(){
        return(
            <div className="Multiplication-table">
                <table className="Table">
                    <tbody>
                        {this.props.series.map(serie =>{
                            return <Table key={serie} serie={serie} term={this.props.term} square={this.props.square} />;
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default SetTable;