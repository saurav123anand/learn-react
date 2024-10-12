import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { joke, loading, error, fetchJoke } = useFetch(url)

  // Use the custom hook here

  // Display loading text here

  // Display something went wrong here
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong…</div>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{joke}</h2>
      <button className="btn" onClick={()=>fetchJoke(url)} >New Joke</button>
    </div>
  );
}
