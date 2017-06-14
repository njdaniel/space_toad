/**
 * Created by nicholas on 5/3/17.
 */
import { combineReducers } from 'redux';
import { data, dataIsLoading } from './reducer_data';

const rootReducer = combineReducers({
    priceData: data,
    isLoading: dataIsLoading
});

export default rootReducer;