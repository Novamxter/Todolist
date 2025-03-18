import React from 'react'

export default function Searchbar(props) {
  return (
    <div className="input-cont">
      <input type="text" className='todo-input' placeholder={props.placeholder} />
    </div>
  )
}
