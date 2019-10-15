import axios from 'axios';

export const FETCH_APOD_START = 'FETCH_APOD_START';
export const FETCH_APOD_SUCCESS = 'FETCH_APOD_SUCCESS';
export const FETCH_APOD_FAIL = 'FETCH_APOD_FAIL';

export const getAPOD = () => dispatch => {
  dispatch({ type: FETCH_APOD_START });
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      dispatch({ type: FETCH_APOD_SUCCESS, payload: res.data.url })
    }
    )
    .catch(err => dispatch({ type: FETCH_APOD_FAIL, payload: err }));
};
