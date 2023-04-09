import React, { useState, useEffect } from "react"
import { Table } from "antd"
import { Row } from "reactstrap"
import { tableColumns } from "../columns"
import { useDispatch, useSelector } from "react-redux"
import { getEvents as onGetEvents } from "../../../store/actions"
import EditTimeLogModal from "../EditTimeLogsModal"

const TimeLogsTable = ({id, month, tr, userJob}) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const dispatch = useDispatch()

  const { events } = useSelector(state => ({
    events: state.calendar.events,
  }))
  useEffect(() => {
    if(id === undefined){
      const obj = JSON.parse(localStorage.getItem("authUser"))
      dispatch(onGetEvents({id:obj.account.id, month:month.format('DD/MM/YYYY')}))
    }
    else{
      dispatch(onGetEvents({id:id,month:month.format('DD/MM/YYYY')}))
    }
    
  }, [dispatch, month])

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
        overflowX: "auto"
      }}
    >
      <Table
        columns={tableColumns(handleOpenEditModal, id, tr, userJob)}
        dataSource={events || []}
        scroll={{ }}
        pagination={false}
      />
      <EditTimeLogModal
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        selectedItem={selectedItem}
        tr={tr}
      />
    </Row>
  )
}

export default TimeLogsTable
