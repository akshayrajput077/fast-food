import axios from "../../axios"; // Your axios instance
import Cookies from "js-cookie";

export async function loginUser(email, password) {
  try {
    const res = await axios.post('/login', {
      emailId: email,
      password: password,
    });
    console.log("response", res)
    if (res.status !== 200) {
      throw new Error('Invalid login credentials');
    }

    const { token, user } = res.data;
    Cookies.set('token', token, { expires: 1 });
    return user;

  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
}

