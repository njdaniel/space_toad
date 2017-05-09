/**
 * Created by nicholas on 5/9/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class GetData extends Component {
    constructor(props) {
        super(props);


        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchData();
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} >
                <span>
                    <button type="submit" className="btn btn-secondary">GetData</button>
                </span>
            </form>
        );
    }

}