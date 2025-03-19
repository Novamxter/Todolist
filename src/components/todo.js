import React from 'react'

export default function Todo() {
  return (
    <div>
      <div className="todos-list">
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>View LightHouse Report</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>push Code</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
        <div className="todos">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="todo-p">
            <p>Remove Textarea</p>
          </div>
          <div className="cross">
            <i className="fa-solid fa-plus cross-icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
