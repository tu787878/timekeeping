import React, { useState, useEffect } from "react"
import { Spin, Table } from "antd"
import { columns } from "./columns"
import { get } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"

const AdminRequestTable = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    page: 1,
    size: 10
  })

  useEffect(() => {
    setLoading(true)
    get(`${url.EDIT_CALENDAR}/admin`, {
      query: filter
    }).then(res => {
      setData(res.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [filter])

  const onPageChange = (page, size) => {
    setFilter({
      page,
      size
    })
  }

  return (
    <Spin spinning={loading}>
      <Table
        columns={columns()}
        dataSource={data || []}
        bordered
        scroll={{y: 500}}
        pagination={{
          total: 20,
          current: filter.page,
          pageSize: filter.size,
          defaultPageSize: 10,
          onChange: onPageChange,
          pageSizeOptions: ["10", "20"],
        }}
        size="small"
      />
    </Spin>
  )
}

export default AdminRequestTable