import React from 'react'

export default function Blog() {
  return (
    <div className='mainClass'> 
          <ul>
            <li key="key1" className="liClass"> Angular </li>
            <li key="key2" className="liClass"> React </li>
            <li key="key3" className="liClass"> Express </li>
          </ul>
         <div className='numbers'>
          <span> one </span>
          <span> two </span>
         </div>
         <div>
          <button className= "my-button disabled"> Submit </button>
s         </div>

    </div>
  )
}
