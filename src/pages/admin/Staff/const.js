export const infoList = [
  {
    key: "firstName",
    name: "First Name",
  },
  {
    key: "lastName",
    name: "Last Name",
  },
  {
    key: "phone",
    name: "Phone",
  },
  {
    key: "email",
    name: "Email",
  },
  {
    key: "selectedRole",
    name: "Role",
  },
  {
    key: "selectedMulti",
    name: "Manager calendar of teams",
    render: value => value?.map(item => item?.name).join(", "),
  },
  {
    key: "team",
    name: "Team",
  },
  {
    key: "jobName",
    name: "Job name",
  },
  {
    key: "selectedWorkingType",
    name: "Working Type",
  },
  {
    key: "minHours",
    name: "Min hours",
  },
  {
    key: "maxHours",
    name: "Vacation in year (days)",
  },
]
