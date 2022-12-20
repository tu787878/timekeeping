import React from "react"
import { Card, CardBody } from "reactstrap"
import { Link, withRouter } from "react-router-dom"

//Import Images
import avatar4 from "../../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../../assets/images/users/avatar-5.jpg"
import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import avatar6 from "../../../assets/images/users/avatar-6.jpg"
import avatar3 from "../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../assets/images/users/avatar-8.jpg"
import avatar7 from "../../../assets/images/users/avatar-7.jpg"
import TaskItem from "../TaskItem"

const TaskBoard = ({ boardName, data }) => {
  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">{boardName}</h4>
        <div className="table-responsive">
          <table className="table table-nowrap align-middle mb-0">
            <tbody>
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}

export default TaskBoard
