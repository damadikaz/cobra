import React from "react";
import { placeholders } from "../../assets/data";
import { onDragEnd } from "../../assets/helper";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Note from "./Note";
import { createPortal } from "react-dom";
import NoteEditor from "./NoteEditor";


const placeholderGroup = {
  ["001"]: {
    name: "NOTES01",
    items: placeholders.notes,
  },
};

function Notes() {
  const [displayedGroup, setDisplayedGroup] = React.useState(placeholderGroup);
  const [showEditor, setShowEditor] = React.useState(false)

  const [activeIndex, setActiveIndex] = React.useState(0)
  const [activeTitle, setActiveTitle] = React.useState('')
  const [activeContent, setActiveContent] = React.useState('')


  function body_onClick(e, index) {
    // e.preventDefault()
    setActiveIndex(index)
    setActiveTitle(displayedGroup['001'].items[index].title)
    setActiveContent(displayedGroup['001'].items[index].content)
    setShowEditor(true)
  }

  function noteeditor_update(title, content, color) {
    const now = Date.now().toString()
    const newNote = {
      id: now,
      title: title,
      content: content,
      color: color,
      timestamp: now,
    }
    const group = displayedGroup['001']
    const copiedItems = [...group.items]

    const [removed] = copiedItems.splice(activeIndex, 1, newNote)
    setDisplayedGroup({
      ...displayedGroup,
      ["001"]: {
        ...group,
        items: copiedItems,
      },
    });
    setShowEditor(false)


  }

  return (
    <>
    <div className="notes">
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, displayedGroup, setDisplayedGroup)
        }
      >
        {Object.entries(displayedGroup).map(([dtg_key, dtg_value], index) => {
          return (
            <div className="notes-dragdropcontext" key={index}>
              <Droppable
                droppableId={dtg_key}
                key={dtg_key}
                direction="horizontal"
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      className="notes-droppable flex-row"
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
                                  className="notes-draggable borderbox"
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                >
                                    <Note
                                    title={item.title}
                                    content={item.content}
                                    timestamp={item.timestamp}
                                    color={item.color}
                                    onClick_body={(e)=>body_onClick(e, index)}
                                    
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

    {showEditor && createPortal(<NoteEditor
    contentFromParent={activeContent}
    titleFromParent={activeTitle}
    colorFromParent={displayedGroup['001'].items[activeIndex].color}
    onClick_close={(title, content, color)=>noteeditor_update(title, content, color)}
    />,document.body)}

    </>
  );
}

export default Notes;
