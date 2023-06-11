import React from "react";

function Tile({ title, url, src, size = 64, pad = 22, onContextMenu }) {
  const style = {
    iconContainer: { width: size, height: size },
  };

  function getLabel(string) {
    if (string.length > 8) {
      return string.slice(0, 6) + "…";
    } else return string;
  }

  function getFavicon(url, size) {
    const icon = `https://www.google.com/s2/favicons?domain=${url}&sz=${size}`
    return icon
  }

  return (
    <div className="tile">
      <a href={url} onContextMenu={(e)=>onContextMenu(e)}>
        <div className="t-icon flex-cntr bb" style={style.iconContainer}>
          <img src={getFavicon(url, 32)} />
        </div>
      </a>
      <a href={url} onContextMenu={(e)=>onContextMenu(e)}>
        <div className="t-label flex-cntr">
          <span>{getLabel(title)}</span>
        </div>
      </a>
    </div>
  );
}

export default Tile;
