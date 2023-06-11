import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { placeholders } from "../../assets/data";
import { onDragEnd } from "../../assets/helper";

import Tile from "./Tile";
import { createPortal } from "react-dom";
import Contextmenu from "../Common/Contextmenu";
import TileEditor from "./TileEditor";

const placeholderGroup = {
  ["001"]: {
    name: "TILES01",
    items: placeholders.favs,
  },
};

function Tiles() {
  const [displayedGroup, setDisplayedGroup] = useState(placeholderGroup);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState("Title");
  const [activeUrl, setActiveUrl] = useState("URL");

  const [showContext, setShowContext] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  function tile_OCM(e, index) {
    setActiveIndex(index);
    setMouseXY({ x: e.clientX, y: e.clientY });
    setActiveTitle(displayedGroup["001"].items[index].title);
    setActiveUrl(displayedGroup["001"].items[index].url);
    setShowContext(!showContext);

    console.log(index);
  }

  function contextmenu_OC(e, id) {
    if (id === "toEdit") {
      setShowContext(false);
      setShowEditor(true);
    } else {
      setShowContext(false);
      console.log(id);
    }
  }

  function TileEditor_OCSubmit(t, u) {
    const now = Date.now().toString();
    const newTile = { id: now, title: t, url: u };
    const group = displayedGroup["001"];
    const copiedItems = [...group.items];

    if (activeIndex === 69420) {
      const [add] = copiedItems.splice(copiedItems.length, 0, newTile);
      setDisplayedGroup({
        ...displayedGroup,
        ["001"]: {
          ...group,
          items: copiedItems,
        },
      });
      setShowEditor(false);
    } else {
      const [removed] = copiedItems.splice(activeIndex, 1, newTile);
      setDisplayedGroup({
        ...displayedGroup,
        ["001"]: {
          ...group,
          items: copiedItems,
        },
      });
      setShowEditor(false);
    }
  }

  return (
    <>
      <div className="tiles" onContextMenu={(e) => e.preventDefault()}>
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, displayedGroup, setDisplayedGroup)
          }
        >
          {Object.entries(displayedGroup).map(([dtg_key, dtg_value], index) => {
            return (
              <div className="tiles-dragdropcontext" key={index}>
                <Droppable
                  droppableId={dtg_key}
                  key={dtg_key}
                  direction="horizontal"
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        className="tiles-droppable flex-row"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {dtg_value.items.map((item, index) => {
                          return (
                            <Draggable
                              draggableId={item.id}
                              key={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className="tiles-draggable borderbox"
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                  >
                                    <Tile
                                      url={item.url}
                                      title={item.title}
                                      onContextMenu={(e) => tile_OCM(e, index)}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>

      {showContext &&
        createPortal(
          <Contextmenu
            mouseXY={mouseXY}
            onClick={(e, id) => contextmenu_OC(e, id)}
            onClose={() => setShowContext(false)}
            onCm={(e) => {
              e.preventDefault();
              setMouseXY({ x: e.clientX, y: e.clientY });
            }}
          />,
          document.body
        )}

      {showEditor &&
        createPortal(
          <TileEditor
            titleFromParent={activeTitle}
            urlfromParent={activeUrl}
            onClick_cancel={() => setShowEditor(false)}
            onClick_submit={(t, u) => TileEditor_OCSubmit(t, u)}
          />,
          document.body
        )}
    </>
  );
}

export default Tiles;
