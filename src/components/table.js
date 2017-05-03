/**
 * Created by nicholas on 5/3/17.
 */
import React, {Component} from 'react';
import ReactTable from 'react-table';

const columns = [{
    header: 'Name',
    columns: [{
        header: 'First Name',
        accessor: 'firstName'
    }, {
        header: 'Last Name',
        id: 'lastName',
        accessor: d => d.lastName
    }]
}, {
    header: 'Info',
    columns: [{
        header: 'Age',
        accessor: 'age'
    }]
}];

const data = ["BNSF", "ATL"];

export default class DataTable extends Component {

    render() {
        console.log(data);
        return (
            <ReactTable
                className='-striped -highlight'
                data={data}
                columns={columns}
                defaultPageSize={10}
            />
        );
    }
}