import {
    FETCH_APOD_START,
    FETCH_APOD_SUCCESS,
    FETCH_APOD_FAIL
  } from '../actions/actions.js';
  
  const initialState = {
    apodURL: "",
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_APOD_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_APOD_SUCCESS:
        return {
          ...state,
          apodURL: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_APOD_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;