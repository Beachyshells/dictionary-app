import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.loading) {
    return <p>Loading...</p>;
  }

  if (props.error) {
    return <p>There has been an error can you please try the word again</p>;
  }

  if (props.results) {
    return (
      <div className="Results">
        <div className="word">
          <h2>{props.results[0].word}</h2>
        </div>

        <Meaning meanings={props.results[0].meanings} />

        {props.photos && (
          <div className="photo">
            {props.photos.map(function (photo, index) {
              return (
                <img key={index} src={photo.src.portrait} alt={photo.alt} />
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
