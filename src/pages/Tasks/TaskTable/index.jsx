import React, { useEffect, useState } from "react"
import { Spin, Table } from "antd"
import { columns } from "./columns"
import { get } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const TaskTable = ({ filter, setFilter }) => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    get(`${url.GET_TASKS}`, {
      params: filter,
    })
      .then(res => {
        setData(res.data.data)
        setTotal(res.data.total)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [filter])

  const onPageChange = (page, size) => {
    setFilter({ ...filter, page, size })
  }

  return (
    <Spin spinning={loading}>
      <Table
        columns={columns() || []}
        dataSource={data || []}
        pagination={{
          total: total,
          current: filter.page,
          pageSize: filter.size,
          onChange: onPageChange,
          defaultPageSize: 10,
          pageSizeOptions: ["10", "20", "50"],
          showSizeChanger: true,
        }}
        loading={loading}
      />
    </Spin>
  )
}

export default TaskTable
