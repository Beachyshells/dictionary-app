import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meanings.map(function (meaning, index) {
        return (
          <div key={index} className="meaning-block">
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map(function (definition, defIndex) {
              return (
                <div key={defIndex} className="definition">
                  {definition.definition}
                </div>
              );
            })}
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
