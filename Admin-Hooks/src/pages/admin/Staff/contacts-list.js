import React, { useEffect, useState, useRef, useMemo } from "react";
import { withRouter, Link } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  UncontrolledTooltip,
  Input,
  Form,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";


import { Name, Email, Tags, Projects, Img } from "./contactlistCol";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

import {
  getStaffs as onGetStaffs,
  updateStaffs as onUpdateStaff
} from "store/admin/staff/actions";
import { isEmpty } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";

const StaffManager = props => {

  //meta title
  document.title="User List | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();
  const [contact, setContact] = useState();
  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (contact && contact.name) || "",
      parent: (contact && contact.parent && contact.parent.id) || 0,
      tags: (contact && contact.tags && contact.tags.join(";")) || "",
      description: (contact && contact.description) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      parent: Yup.number().required("Please Enter Your Designation"),
      tags: Yup.string().required("Please Enter Tag"),
      description: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateUser = {
          id: contact.id,
          parent:{
            id:values.parent,
          },
          name: values.name,
          description: values.description,
          tags: values.tags,
        };
        console.log(updateUser);
        // update user
        dispatch(onUpdateStaff(updateUser));
        dispatch(onGetStaffs());
        validation.resetForm();
        setIsEdit(false);
      } else {
        const newUser = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          name: values["name"],
          designation: values["designation"],
          email: values["email"],
          tags: values["tags"],
          projects: values["projects"],
        };
        // save new user
        dispatch(onAddNewUser(newUser));
        validation.resetForm();
      }
      toggle();
    },
  });

  const { users } = useSelector(state => ({
    users: state.Staffs.staffs,
  }));

  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "Team",
        accessor: "job.team.name",
        disableFilters: true, 
        Cell: cellProps => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "Name",
        accessor: "userDetail.firstName",
        disableFilters: true, 
        Cell: cellProps => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "Job",
        accessor: "job.name",
        disableFilters: true, 
        Cell: cellProps => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "Email",
        accessor: "username",
        disableFilters: true, 
        Cell: cellProps => {
          return <Email {...cellProps} />;
        },
      },
      {
        Header: "Action",
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const userData = cellProps.row.original;
                  handleUserClick(userData);
                }}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const userData = cellProps.row.original;
                  onClickDelete(userData);
                }}
              >
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetStaffs());
      setIsEdit(false);
    }
  }, [dispatch, users]);

  useEffect(() => {
    setContact(users);
    setIsEdit(false);
  }, [users]);

  useEffect(() => {
    if (!isEmpty(users) && !!isEdit) {
      setContact(users);
      setIsEdit(false);
    }
  }, [users]);

  const toggle = () => {
    setModal(!modal);
  };

  const handleUserClick = arg => {
    const user = arg;

    setContact({
      id: user.id,
      name: user.name,
      email: user.email,
      tags: user.tags,
      projects: user.projects,
    });
    setIsEdit(true);

    toggle();
  };

  var node = useRef();
  const onPaginationPageChange = page => {
    if (
      node &&
      node.current &&
      node.current.props &&
      node.current.props.pagination &&
      node.current.props.pagination.options
    ) {
      node.current.props.pagination.options.onPageChange(page);
    }
  };

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = users => {
    setContact(users);
    setDeleteModal(true);
  };

  const handleDeleteUser = () => {
    dispatch(onDeleteUser(contact));
    onPaginationPageChange(1);
    setDeleteModal(false);
  };

  const handleUserClicks = () => {
    setUserList("");
    setIsEdit(false);
    toggle();
  };

  const keyField = "id";

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteUser}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={users}
                    isGlobalFilter={true}
                    isAddUserList={true}
                    handleUserClick={handleUserClicks}
                    customPageSize={10}
                    className="custom-header-css"
                  />

                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} tag="h4">
                      {!!isEdit ? "Edit Team" : "Add Team"}
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        onSubmit={e => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <Row form>
                          <Col xs={12}>
                            <div className="mb-3">
                              <Label className="form-label">Name</Label>
                              <Input
                                name="name"
                                type="text"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.name || ""}
                                invalid={
                                  validation.touched.name &&
                                    validation.errors.name
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.name &&
                                validation.errors.name ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.name}
                                </FormFeedback>
                              ) : null}
                            </div>
                            <div className="mb-3">
                              <Label className="form-label">Parent</Label>
                              <Input
                                type="select"
                                name="parent"
                                className="form-select"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.parent || 0}
                                invalid={
                                  validation.touched.parent &&
                                    validation.errors.parent
                                    ? true
                                    : false
                                }
                              >
                                {
                                  console.log(validation.values.parent)
                                }
                                <option value={0}>NULL</option>
                                
                               
                              </Input>
                              {validation.touched.parent &&
                                validation.errors.parent ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.parent}
                                </FormFeedback>
                              ) : null}
                            </div>
                            
                            <div className="mb-3">
                              <Label className="form-label">Description</Label>
                              <Input
                                name="description"
                                label="Description"
                                type="text"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.description || ""}
                                invalid={
                                  validation.touched.description &&
                                    validation.errors.description
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.description &&
                                validation.errors.description ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.description}
                                </FormFeedback>
                              ) : null}
                            </div>
                            
                            <div className="mb-3">
                              <Label className="form-label">Tags</Label>
                              <Input
                                name="tags"
                                label="Tags"
                                type="text"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.tags || ""}
                                invalid={
                                  validation.touched.tags &&
                                    validation.errors.tags
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.tags &&
                                validation.errors.tags ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.tags}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="text-end">
                              <button
                                type="submit"
                                className="btn btn-success save-user"
                              >
                                Save
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </ModalBody>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(StaffManager);
