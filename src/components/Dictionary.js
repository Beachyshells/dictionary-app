import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }
  function handleResponse(response) {
    setResults = response.data;
  }

  function searchWord(keyword) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return <div className="Dictionary">This is my Dictionary</div>;
}
