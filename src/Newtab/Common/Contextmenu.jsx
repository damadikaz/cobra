import React from 'react'
import { contextMenus } from '../../assets/data'

function Contextmenu({mouseXY = {x:0, y:0}, onClick, onClose, onCm}) {
    const style = {
        container: {
            position: 'absolute',
            left: mouseXY.x,
            top: mouseXY.y,
        }
    }

console.log(mouseXY);

  return (
    <>
        <div className='contextmenu flex-col' style={style.container}>
            {contextMenus.tile.map((item, index) => {
                return(
                    <div
                    key={item.id}
                    className={`cm-${item.id}`}
                    onClick={(e)=>onClick(e, item.id)}
                    >
                        {item.label}
                    </div>
                )
            })}
        </div>
        <div
        className='context-bg'
        onClick={onClose}
        onContextMenu={onCm}
        />
    </>
    
  )
}

export default Contextmenu