import React, { useState } from "react";
import "./delete.css";
import { MdDelete } from "react-icons/md";

const Delete = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    console.log("Deleting...");
    handleOpen();
  };

  return (
    <div>
      <button className="btn btn-delete" onClick={handleOpen}>
        <MdDelete id="btn-delete" />
      </button>
      {isOpen && (
        <div className="delete-dialog">
          <div className="delete-dialog-content">
            <p>Are you sure you want to delete?</p>
            <div className="delete-dialog-buttons">
              <button onClick={handleOpen}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
