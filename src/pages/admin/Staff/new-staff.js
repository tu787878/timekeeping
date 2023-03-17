import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import { withRouter } from "react-router-dom"

//redux
import { connect, useSelector, useDispatch } from "react-redux"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import { getCapabilities } from "store/actions"

import { getTeams as onGetTeams } from "store/admin/team/actions"

import NewStaffForm from "./new-staff-form"

const NewStaff = props => {
  //meta title
  document.title = "Form Wizard | Skote - React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { capabilities, onGetCapabilities } = props

  const { teams } = useSelector(state => ({
    teams: state.Teams.teams,
  }))

  useEffect(() => {
    onGetCapabilities()
  }, [onGetCapabilities])

  useEffect(() => {
    if (teams && !teams.length) {
      dispatch(onGetTeams())
    }
  }, [dispatch, teams])

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <NewStaffForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

NewStaff.propTypes = {
  capabilities: PropTypes.any,
  onGetCapabilities: PropTypes.func,
  addSuccess: PropTypes.any,
}

const mapStateToProps = ({ Capabilities, Staffs }) => ({
  capabilities: Capabilities.capabilities,
  addSuccess: Staffs.staff,
})

const mapDispatchToProps = dispatch => ({
  onGetCapabilities: () => dispatch(getCapabilities()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewStaff))
