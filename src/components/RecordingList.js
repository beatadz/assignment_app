import React from 'react';
import Recording from './Recording';

const RecordingList = props => {
  return (
    <ul>
        {props.recordings.map((recording) => (
            <Recording
                key={recording.title + Math.random()}
                title={recording.title}
                name={recording["artist-credit"][0].name}
                album={recording.releases[0].title}
            />
        ))}
    </ul>
  );
};

export default RecordingList;