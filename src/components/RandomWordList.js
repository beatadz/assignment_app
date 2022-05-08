import React from 'react';
import RandomWord from './RandomWord';
import './RandomWord.css'

const RandomWordsList = props => {
  return (
    <ul>
        {props.words.map((word) => (
            <RandomWord
                key={word.word}
                word={word.word}
                definition={word.definition}
                pronunciation={word.pronunciation}
            />
        ))}
    </ul>
  );
};

export default RandomWordsList;