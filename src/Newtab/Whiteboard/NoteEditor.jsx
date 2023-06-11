import React, { useState } from 'react'

function NoteEditor({onClick_close, titleFromParent, contentFromParent, colorFromParent}) {
  const [title, setTitle] = useState(titleFromParent)
  const [content, setContent] = useState(contentFromParent)
  const [color, setColor] = useState(colorFromParent)

  const style = {
    color: {backgroundColor: `#${color}`}
  }

  return (
    <div className='modal modaleditornote'>
      <form className='editornote'>
        <div className='en-body flex-col' style={style.color}>
          <textarea className='enb-title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea className='enb-content' value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        <div className='en-footer flex-row'>
          <button onClick={()=>onClick_close(title, content, color)}>Close</button>
        </div>
      </form>
    </div>
  )
}

export default NoteEditor