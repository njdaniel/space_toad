/**
 * Created by nicholas on 5/3/17.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactTable from 'react-table';
import namor from 'namor';
import 'react-table/react-table.css';

const data = _.map(_.range(5553), d => {
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30)
    }
});

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

export default class DataTable extends Component {
    constructor() {
        super();
        this.sortChange = this.sortChange.bind(this);
        this.state = {
            sorting: [],
            page: 0,
            pageSize: 10
        }
    }

    sortChange(column, shift) {
        if(shift)
            alert('Shift click not implemented in this demo');
        let sort = {id: column.id};
        if(this.state.sorting.length && this.state.sorting[0].id === column.id)
            this.state.sorting[0].asc ? sort.desc = true : sort.asc = true;
        else
            sort.asc = true;
        this.setState({
            sorting: [sort]
        })
    }

    render() {
        return (
            <ReactTable
                className='-striped -highlight'
                data={data}
                columns={columns}
                sorting={this.state.sorting}
                onSortingChange={this.sortChange}
                page={this.state.page}
                onPageChange={page => this.setState({page})}
                pageSize={this.state.pageSize}
                onPageSizeChange={(pageSize, page) => this.setState({page, pageSize})}
            />
        );
    }
}