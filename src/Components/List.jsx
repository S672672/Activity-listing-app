import React from 'react'

function List({activity,date}) {
  return (
    <div className="row">
          <div className="col-6">{activity}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
  )
}

export default List