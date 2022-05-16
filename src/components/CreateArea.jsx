import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const dateTime = new Date().toLocaleString({
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  });

  const [note, setNote] = useState({
    title: [dateTime],
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: [dateTime],
      content: ""
    });
    event.preventDefault();
  }
  //let the text area expand after its clicked and make add button zoom in
  const [textAreaIsClicked, setExpand] = useState(false);

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {textAreaIsClicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={textAreaIsClicked ? 3 : 1}
        />

        <Zoom in={textAreaIsClicked}>
          <Fab onClick={submitNote}>
            <AddIcon fontSize="large"/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
