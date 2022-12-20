import React from "react"
import { Link, withRouter } from "react-router-dom"

import avatar4 from "../../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../../assets/images/users/avatar-5.jpg"

const TaskItem = () => {
  return (
    <tr>
      <td style={{ width: "40px" }}>
        <div className="form-check font-size-16">
          <input
            className="form-check-input"
            type="checkbox"
            id="upcomingtaskCheck01"
          />
          <label
            className="form-check-label"
            htmlFor="upcomingtaskCheck01"
          ></label>
        </div>
      </td>
      <td>
        <h5 className="text-truncate font-size-14 m-0">
          <Link to="#" className="text-dark">
            Create a Skote Dashboard UI
          </Link>
        </h5>
      </td>
      <td>
        <div className="avatar-group">
          <div className="avatar-group-item">
            <Link to="#" className="d-inline-block">
              <img src={avatar4} alt="" className="rounded-circle avatar-xs" />
            </Link>
          </div>
          <div className="avatar-group-item">
            <Link to="#" className="d-inline-block">
              <img src={avatar5} alt="" className="rounded-circle avatar-xs" />
            </Link>
          </div>
        </div>
      </td>
      <td>
        <div className="text-center">
          <span className="badge rounded-pill badge-soft-secondary font-size-11">
            Waiting
          </span>
        </div>
      </td>
    </tr>
  )
}

export default TaskItem
