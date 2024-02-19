// import "./App.css";
import { useState } from "react";
import Title from "./components/title/Title";
import Delete from "./components/delete/Delete";
import User from "./components/User";
import Searchbar from "./components/searchbar/Searchbar";
import Searchresult from "./components/searchbar/Searchresult";
import FetchFriends from "./components/FriendList/FetchFriends";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Title />
      <Searchbar setResults={setResults} />
      <Searchresult results={results} />
      {/* <Delete /> */}
      {/* <User /> */}
      <FetchFriends results={results} />
    </div>
  );
}

export default App;
