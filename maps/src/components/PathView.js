import React from 'react'
import Path from './Path.js'

const PathView = ({ showSelected, paths }) => {
  return (
    <div id='pathsContainer' >
      <h1>Saved paths</h1>
      <ul>
        {paths.map( p =>
          <Path 
            key={p.key} 
            path={p} 
            handlePathClick={() => {showSelected(p)}}
            />
        )}
        </ul>
    </div>
  )
}

export default PathView