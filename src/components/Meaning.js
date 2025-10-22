import React from "react";

export default function Meaning(props) {

  if (props.meanings) {
props.meanings.map(function()){
  
}
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <Synonyms meaning={props.meanings} />
      </div>
    );
  
}
