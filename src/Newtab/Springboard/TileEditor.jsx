import React, { useState } from "react";

function EditorTile({
  titleFromParent,
  urlfromParent,
  onClick_cancel,
  onClick_submit,
}) {
  const [title, setTitle] = useState(titleFromParent);
  const [url, setUrl] = useState(urlfromParent);

  return (
    <div className="modal">
      <form className="tileeditor flex-col">
        <div className="te-heading">Edit Shortcut</div>
        <div className="te-body flex-col">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="te-footer flex-row">
          <button onClick={() => onClick_cancel()}>Cancel</button>
          <button onClick={() => onClick_submit(title, url)}>Done</button>
        </div>
      </form>
    </div>
  );
}

export default EditorTile;
