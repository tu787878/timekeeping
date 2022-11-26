

export default function getToken() {
  const obj = JSON.parse(localStorage.getItem("authUser"))
  if (obj && obj.accessToken) {
    return "Bearer " + obj.accessToken 
  } else {
    return {}
  }
}