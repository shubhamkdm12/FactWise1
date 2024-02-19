import React, { useState } from "react";
import "./searchbar.css";
import { CiSearch } from "react-icons/ci";
import Data from "../Data.json";

const Searchbar = ({ setResults }) => {
  const [search, setSearch] = useState("");

  const fetchData = () => {
    const filteredResults = Data.filter(
      (friend) =>
        friend.first.toLowerCase().includes(search.toLowerCase()) ||
        friend.last.toLowerCase().includes(search.toLowerCase())
    );

    // const fetchData = (value) => {
    //   const filteredResults = Data.filter((friend) => {
    //     return (
    //       value &&
    //       friend &&
    //       (friend.first.toLowerCase().includes(value.toLowerCase()) ||
    //         friend.last.toLowerCase().includes(value.toLowerCase()))
    //     );
    //   });

    setResults(filteredResults);
    console.log(filteredResults);
  };

  return (
    <main>
      <div className="input-wrapper">
        <CiSearch id="search-icon" />
        <input
          placeholder="type to Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            fetchData();
          }}
        />
      </div>
    </main>
  );
};

export default Searchbar;
