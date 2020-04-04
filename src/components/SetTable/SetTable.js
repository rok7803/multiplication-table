import React from 'react';
import './SetTable.css';
import Table from '../Table/Table';

class SetTable extends React.Component{
    render(){
        return(
            <table className="Table">
                <tbody>
                    {this.props.series.map(serie =>{
                        return <Table serie={serie} term={this.props.term} />;
                    })}
                </tbody>
            </table>
        )
    }
}

export default SetTable;