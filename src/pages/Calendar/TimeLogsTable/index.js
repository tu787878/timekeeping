import React, { useState, useEffect } from "react"
import { Table } from "antd"
import { Row } from "reactstrap"
import { tableColumns } from "../columns"
import { useDispatch, useSelector } from "react-redux"
import { getEvents as onGetEvents } from "../../../store/actions"
import EditTimeLogModal from "../EditTimeLogsModal"

const TimeLogsTable = (id) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const dispatch = useDispatch()

  const { events } = useSelector(state => ({
    events: state.calendar.events,
  }))

  useEffect(() => {
    if(id.id === undefined){
      const obj = JSON.parse(localStorage.getItem("authUser"))
      dispatch(onGetEvents(obj.account.id))
    }
    else{
      dispatch(onGetEvents(id.id))
    }
    
  }, [dispatch])

  const handleOpenEditModal = item => {
    setOpenEditModal(true)
    setSelectedItem(item)
  }

  return (
    <Row
      style={{
        marginTop: 15,
        maxHeight: "700px",
        overflowY: "auto",
      }}
    >
      <Table
        columns={tableColumns(handleOpenEditModal, id.id)}
        dataSource={events || []}
        scroll={{ y: 500 }}
        pagination={false}
      />
      <EditTimeLogModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        selectedItem={selectedItem}
      />
    </Row>
  )
}

export default TimeLogsTable
