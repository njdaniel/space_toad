/**
 * Created by nicholas on 5/9/17.
 */
import {FETCH_DATA} from '../actions/index';

// State argument is not application stat, only the state
//  this reducer is responsible for
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
            return [action.payload.data, ...state]
    }
    return state;
}