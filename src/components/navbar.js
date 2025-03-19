import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
          <div className="left">
            <h1>Todolist</h1>
          </div>
          <div className="right">
            <i className="fa-solid fa-plus plus-icon"></i>
          </div>
        </nav>
    </div>
  )
}
