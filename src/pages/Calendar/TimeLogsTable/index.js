import React, { useState, useEffect } from "react"
import { Table } from "antd"
import { Row } from "reactstrap"
import { tableColumns } from "../columns"
import { useDispatch, useSelector } from "react-redux"
import { getEvents as onGetEvents } from "../../../store/actions"
import EditTimeLogModal from "../EditTimeLogsModal"

const TimeLogsTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const dispatch = useDispatch()

  const { events } = useSelector(state => ({
    events: state.calendar.events,
  }))

  useEffect(() => {
    dispatch(onGetEvents())
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
        columns={tableColumns(handleOpenEditModal)}
        dataSource={events || []}
        scroll={{ y: 500 }}
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
