import React, {Fragment} from "react";
import './RandomWord.css';

const RandomWord = props => {
    return <Fragment>
        <li className="item">
            <h3>Word: {props.word}</h3>
            <h3>Definition: {props.definition}</h3>
            <h3>Pronunciation: {props.pronunciation}</h3> 
        </li>
    </Fragment>
};

export default RandomWord;