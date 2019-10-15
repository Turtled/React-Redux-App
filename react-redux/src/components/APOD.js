import React from 'react';
import { connect } from 'react-redux';
import { getAPOD } from "../actions/actions.js";

function APOD(props) {
    console.log("errorrrrr", props.error);
    return (
        <div className="columnDisplay">
            <h1>NASA APOD</h1>
            {props.error && <p className="error">{props.error.message}</p>}
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    props.getAPOD();
                }}>Get NASA Photo of the Day</button>
            </div>
            {props.isFetching && <p>Getting NASA Photo of the Day...</p>}
            <div><img src={props.apodURL}></img></div>
        </div>
    );
}

const mapStateToProps = state => ({
    apodURL: state.apodURL,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getAPOD }
)(APOD);
