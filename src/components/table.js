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
        mailbox: namor.generate({ words: 1, numbers: 0 }),
        server: namor.generate({ words: 1, numbers: 0 }),
        protocol: namor.generate({ words: 1, numbers: 0 }),
        customer: namor.generate({ words: 1, numbers: 0 }),
        ip: Math.floor(Math.random() * 30),
        inbox: namor.generate({ words: 1, numbers: 0 }),
        outbox: namor.generate({ words: 1, numbers: 0 }),
        date: Math.floor(Math.random() * 30)
    }
});

const columns = [{
    header: 'File Transfer Connections',
    columns: [{
        header: 'Mailbox',
        accessor: 'mailbox'
    }, {
        header: 'Server',
        id: 'server',
        accessor: d => d.server
    }, {
        header: 'Protocol',
        id: 'protocol',
        accessor: d => d.protocol
    }, {
        header: 'Customer',
        id: 'customer',
        accessor: d => d.customer
    },{
        header: 'IP',
        accessor: 'ip'
    }, {
        header: 'Inbox',
        id: 'inbox',
        accessor: d => d.inbox
    }, {
        header: 'Outbox',
        id: 'outbox',
        accessor: d => d.outbox
    },{
        header: 'Date',
        accessor: 'date'
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