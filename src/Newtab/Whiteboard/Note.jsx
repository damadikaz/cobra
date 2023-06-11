import React from "react";

function Note({ title, content, timestamp, color, onClick_body }) {
  const style = {
    container: {
      backgroundColor: `#${color}`,
      width: 180,
      height: 180,
      margin: 8,
      padding: 8,
    },
  };
  return (
    <div className="note flex-col" style={style.container}>
      <div className="n-body flex-col" onClick={(e) => onClick_body(e)}>
        <div className="n-heading">{title}</div>
        <div className="n-content">{content}</div>
        <div className="n-timestamp">{timestamp}</div>
      </div>
    </div>
  );
}

export default Note;
