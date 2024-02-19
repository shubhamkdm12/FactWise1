import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Delete from "../delete/Delete";
import Data from "../Data.json";

export default function FetchFriends({ results }) {
  const [openCards, setOpenCards] = useState([]);

  function toggleCard(id) {
    setOpenCards((previousOpenCards) => {
      if (previousOpenCards.includes(id)) {
        return previousOpenCards.filter((cardsId) => cardsId !== id);
      } else {
        return [...previousOpenCards, id];
      }
    });
  }

  return (
    <div>
      {results.map((friend) => (
        <div key={friend.id}>
          <main
            className="container"
            style={{ height: openCards.includes(friend.id) ? "350px" : "" }}
          >
            <div className="profile">
              <img
                src={friend.picture}
                alt={friend.first}
                style={{ width: "50px", height: "60px" }}
              />
              <input
                placeholder="John Doe"
                value={`${friend.first} ${friend.last}`}
              />
              <button onClick={() => toggleCard(friend.id)}>
                <IoIosArrowDown id="arrow-down" />
              </button>
            </div>
            <div
              className="middle-contain"
              style={{
                display: openCards.includes(friend.id) ? "block" : "none",
              }}
            >
              <span className="inside-contain">
                <label htmlFor="Age">Age</label>
                <input id="Age" type="text" />
                <label htmlFor="Country">Country</label>
                <input id="Country" type="text" value={friend.country} />
                <label htmlFor="Gender">Gender</label>
                <select id="Gender" name="Gender">
                  <option value="A">{friend.gender}</option>
                  <option value="A">Male</option>
                  <option value="F">Female</option>
                  <option value="R">Transgender</option>
                  <option value="A">Rather not say</option>
                </select>
              </span>
              <span className="desc">
                <label id="Desc" htmlFor="Desc">
                  Description
                </label>
                <textarea
                  name="text"
                  value={friend.description}
                  id="Text"
                  rows={4}
                  cols={7}
                ></textarea>
              </span>
              <div className="btns">
                <div style={{ width: "75%", paddingLeft: "31rem" }}>
                  <Delete />
                </div>
                <div style={{ width: "25%" }}>
                  <button className="btn btn-done">
                    <MdDone />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
}
