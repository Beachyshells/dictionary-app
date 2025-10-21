import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }
  function handleResponse(response) {
    setResults(response.data);
    setLoading(false);
  }
  function handleError(error) {
    setLoading(false);
    setError(error);
  }
  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    setLoading(true);
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }
  return (
    <div className="Dictionary">
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        handleSubmit={handleSubmit}
      />
      <Results loading={loading} error={error} results={results} />
    </div>
  );
}
