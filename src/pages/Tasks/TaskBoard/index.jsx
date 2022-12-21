import React, { useState, useEffect } from "react"
import { Card, CardBody } from "reactstrap"
// import { Link, withRouter } from "react-router-dom"

import TaskItem from "../TaskItem"
import TaskFilter from "../TaskFilter"

const TaskBoard = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
    project: "",
    accountId: "",
    status: undefined,
  })

  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <Card>
      <CardBody>
        {/* <h4 className="card-title mb-4">{boardName}</h4> */}
        <TaskFilter filter={filter} setFilter={setFilter} />
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
