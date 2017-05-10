/**
 * Created by nicholas on 5/3/17.
 */
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    const request = axios.get('https://crest-tq.eveonline.com/market/prices/');
    console.log('Action Request: ',request);

    return {
        type: FETCH_DATA,
        payload: request
    };
}