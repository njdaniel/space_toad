/**
 * Created by nicholas on 5/3/17.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactTable from 'react-table';
import {connect} from 'react-redux';
import namor from 'namor';
import 'react-table/react-table.css';




const columns = [{
    header: 'Market',
    columns: [{
        header: 'Item',
        accessor: 'item',
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
    }, {
        header: 'Location',
        id: 'location',
        accessor: d => d.location,
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
    }, {
        header: 'Sell Price',
        id: 'sell_price',
        accessor: d => d.sell_price,
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
    }, {
        header: 'Buy Price',
        id: 'buy_price',
        accessor: d => d.buy_price,
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
    }]
}];

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.sortChange = this.sortChange.bind(this);
        this.state = {
            sorting: [],
            page: 0,
            pageSize: 10
        }
    }

    sortChange(column, shift) {
        if(shift)
            alert('Shift click not implemented');
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
        // const data = _.map(_.range(5553), d => {
        //     return {
        //         item: namor.generate({ words: 1, numbers: 0 }),
        //         location: namor.generate({ words: 1, numbers: 0 }),
        //         sell_price: Math.floor(Math.random() * 99),
        //         buy_price: Math.floor(Math.random() * 99)
        //     }
        // });

        let data = this.props.priceData.map( d => {
           return {
               item: d.items.adjustedPrice,
               location: d.items.adjustedPrice,
               sell_price: d.items.adjustedPrice,
               buy_price: d.items.averagePrice
           }
        });

        console.log('DATA: ', data);

        if (data === []) {
            let data = _.map(_.range(5553), d => {
                return {
                    item: namor.generate({ words: 1, numbers: 0 }),
                    location: namor.generate({ words: 1, numbers: 0 }),
                    sell_price: Math.floor(Math.random() * 99),
                    buy_price: Math.floor(Math.random() * 99)
                }
            });
        }

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
                defaultFilterMethod={(filter, row) => (String(row[filter.id]) === filter.value)}
                showFilters={true}
            />
        );
    }
}


function mapStateToProps({priceData}) {
    return { priceData };
}

export default connect(mapStateToProps)(DataTable);