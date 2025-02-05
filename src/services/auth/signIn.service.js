import axios from "../../axios"; // Your axios instance
import Cookies from "js-cookie";

export async function loginUser(email, password) {
  const res = await axios.post('/login', {
    emailId: email,
    password: password,
  });
  const { token, user } = res.data;
  Cookies.set('token', token, { expires: 1 });
  return user;
}

