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
        <div className="word">{props.results[0].word}</div>
        <Meaning meanings={props.results[0].meanings} />
      </div>
    );
  } else {
    return null;
  }
}
