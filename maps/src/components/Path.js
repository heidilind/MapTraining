import React from 'react'

const Path = ({ path, handlePathClick }) => {
  return (
    <li className="singlePath">
        {path.name}
        <button onClick={handlePathClick}>view on the map</button>
    </li>
  )
}

export default Path