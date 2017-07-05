/**
 * Created by nicholas on 5/9/17.
 */
import {FETCH_DATA_SUCCESS, DATA_IS_LOADING} from '../actions/index';

// State argument is not application stat, only the state
//  this reducer is responsible for
export function data(state = [], action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            console.log('in success reducer');
            return action.data;
        default:
            return state;
    }
}

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case DATA_IS_LOADING:
            console.log('In Data isLoading reducer');
            return action.isLoading;
        default:
            return state;
    }
}