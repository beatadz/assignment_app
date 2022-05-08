import React, {Fragment} from "react";
import './Recording.css';

const Recording = props => {

    if(props.name === "Title"){
        return <Fragment>
            <li className="item">
                <h3>No recording found!</h3>
            </li>
        </Fragment>
    }

    return <Fragment>
        <li className="item">
            <h3>Title: {props.title}</h3>
            <h3>Artist name: {props.name}</h3>
            <h3>Album: {props.album}</h3>
        </li>
    </Fragment>
};

export default Recording;