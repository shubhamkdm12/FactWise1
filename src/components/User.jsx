import React, { useState } from "react";
import "./user.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { IconContext } from "react-icons";
import { GiCancel } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <main className="container" style={{ height: isOpen ? "350px" : "" }}>
        <div className="profile">
          <img
            src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
            alt="User"
            style={{ width: "50px", height: "60px" }}
          />
          <input placeholder="John Doe" />
          <buttton onClick={handleOpen}>
            <IoIosArrowDown id="arrow-down" />
          </buttton>
        </div>
        <div
          className="middle-contain"
          style={{ display: isOpen ? "block" : "" }}
        >
          <span className="inside-contain">
            <label htmlFor="Age">Age</label>
            <input id="Age" type="text" />
            <label htmlFor="Country">Country</label>
            <input id="Country" type="text" />
            <label htmlFor="Gender">Gender</label>
            <select id="Gender" name="Gender">
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
            <textarea name="text" id="Text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae doloremque alias officia expedita perferendis autem
              dolor nihil possimus et corrupti itaque unde numquam ducimus
              fugiat impedit id, dolorum repellendus dicta.
            </textarea>
          </span>
          <div className="btns" style={{ display: isOpen ? "block" : "" }}>
            <button className="btn btn-cancel">
              <GiCancel id="btn-cancel" />
            </button>
            <button className="btn btn-done">
              <MdDone />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
