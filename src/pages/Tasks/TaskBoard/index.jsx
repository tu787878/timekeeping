import React, { useState } from "react"
import { Card, CardBody } from "reactstrap"

import TaskItem from "../TaskItem"
import TaskFilter from "../TaskFilter"
import TaskTable from "../TaskTable"

const TaskBoard = () => {
  const [filter, setFilter] = useState({
    projectId: "",
    accountId: "",
    status: undefined,
    page: 0,
    size: 10,
  })

  return (
    <Card>
      <CardBody>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskTable filter={filter} setFilter={setFilter} />
      </CardBody>
    </Card>
  )
}

export default TaskBoard
