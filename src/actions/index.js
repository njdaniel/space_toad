/**
 * Created by nicholas on 5/3/17.
 */
import axios from 'axios';

export function fetchdata() {
    const request = axios.get('https://crest-tq.eveonline.com/market/10000002/orders/sell/?type=https://crest-tq.eveonline.com/inventory/types/34/');
    console.log(request);
}