import React from "react";

export default function SearchBar(props) {
  function handleKeywordChange(event) {
    let newWord = event.target.value;
    props.setKeyword(newWord);
  }
  return (
    <div className="SearchBar">
      <form onSubmit={props.handleSubmit}>
        <input
          className="Search"
          value={props.keyword}
          placeholder="enter a word here..."
          onChange={handleKeywordChange}
        />
        <input className="button" type="submit" />
      </form>
    </div>
  );
}
