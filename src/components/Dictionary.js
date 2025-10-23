import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }
  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setLoading(false);
    setResults(response.data);
    let sheCodesApiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
  }

  function handleError(error) {
    setLoading(false);
    setError(error);
  }
  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    setLoading(true);
    setPhotos(null);
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }
  return (
    <div className="Dictionary">
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        handleSubmit={handleSubmit}
      />
      <Results
        photos={photos}
        loading={loading}
        error={error}
        results={results}
      />
    </div>
  );
}
