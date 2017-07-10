/**
 * Created by nicholas on 5/3/17.
 */
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_IS_LOADING = 'DATA_IS_LOADING';
export const DATA_ERRORED = 'DATA_ERRORED';
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const URL = 'https://crest-tq.eveonline.com/market/prices/';

export function fetchData() {
  return (dispatch) => {
    debugger
    console.log("dispatch is " + dispatch);
    dispatch(dataIsLoading(true));
    axios.get(URL)
      .then((response) => {
        console.log('RESPONSE IN ACTION', response);
        dispatch(dataIsLoading(false));
        dispatch(fetchDataSuccess(response.data));
      });

  }

}


export function dataIsLoading(bool) {
  return {
    type: DATA_IS_LOADING,
    isLoading: bool
  };
}

export function dataErrored(bool) {
  return {
    type: DATA_ERRORED,
    hasErrored: bool
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  }
}
