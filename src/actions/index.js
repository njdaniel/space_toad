/**
 * Created by nicholas on 5/3/17.
 */
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchdata() {
    const request = axios.get('https://crest-tq.eveonline.com/market/prices/');
    console.log(request);

    return {
        type: FETCH_DATA,
        payload: request
    };
}