import React, {Fragment, useState} from "react";
import RandomWordList from "./RandomWordList";
import RecordingList from './RecordingList';
import './Input.css';

const Input = () => {

    const [enteredAmount, setEnteredAmount] = useState("5");

    const changeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        
        setEnteredAmount("5");
        //console.log(word);
    };

    const [words, setWords] = useState([]);
    const [recordings, setRecordings] = useState([])
    const [isLoadingW, setIsLoadingW] = useState(false);
    const [isLoadingR, setIsLoadingR] = useState(false);

    async function fetchWordsHandler(){
        setIsLoadingW(true);
        const amount = enteredAmount;
        var allData = [];
        
        for(let i = 0; i < amount; i++){
            const response = await fetch('https://random-words-api.vercel.app/word').then((res) => res.json());
            console.log(response[0]);
            allData.push(response[0]);
        }
        console.log(allData);
        allData.sort((a, b) => (a.word > b.word) ? 1 : -1);
        setWords(allData);
        setIsLoadingW(false);

    };

    async function fetchRecordingsHandler(){
        setIsLoadingR(true);
        var allRecordings = [];
        for(let i = 0; i < words.length; i++){
            console.log(words[i].word);
            const link = "https://musicbrainz.org/ws/2/recording?query=title:"+words[i].word+"&limit=1&fmt=json";
            const response = await fetch(link).then((res) => res.json());
            allRecordings.push(response.recordings[0]);
        }
        console.log(allRecordings);
        setRecordings(allRecordings);
        setIsLoadingR(false);
    }

    return <Fragment>
        <div className="main">
            <form onSubmit={submitHandler}>
                <div className="user-input">
                    <label className="label-text">How many random words do you want to find?</label>
                    <input onChange={changeHandler} value={enteredAmount} type='number' min="5" max="20" step="1"/>
                </div>
                <div className="flex-container">
                    <button type="submit" onClick={fetchWordsHandler}>Click to find random words</button>
                    <button onClick={fetchRecordingsHandler}>Click to find recordings</button>
                </div>
            </form>
            {(isLoadingW || isLoadingR) && <p>Loading...</p>}
            <div className="flex-container">
                {!isLoadingW && <RandomWordList words={words}/>}
                {!isLoadingR && <RecordingList recordings={recordings}/>}
            </div>
            
        </div>
    </Fragment>
};

export default Input;