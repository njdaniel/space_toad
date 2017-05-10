/**
 * Created by nicholas on 5/3/17.
 */
import { combineReducers } from 'redux';
import DataReducer from './reducer_data';

const rootReducer = combineReducers({
    data: DataReducer
});

export default rootReducer;