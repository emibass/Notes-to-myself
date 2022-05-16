import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
        <div className="note-header">
      <h1>{props.title}</h1>
</div>

      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon fontSize="small" />
      </button>
    </div>
  );
}

export default Note;
