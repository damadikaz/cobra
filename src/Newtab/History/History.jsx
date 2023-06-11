import './history.css'

import React, { useState } from 'react'

function History() {
    const [ topSites, setTopSites ] = useState([])

  function onClick(){
    chrome.topSites.get((data) => {
      setTopSites(data)
    })
  }

  return (
    <div id='history'>
      {
        topSites.map(site => (
          <a className="history-item" href={site.url}>{site.title}</a>
        ))
      }

      <button onClick={()=>onClick()}>Magic</button>
    </div>
  )
}

export default History