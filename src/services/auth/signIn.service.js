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

export async function localData() {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem('user');
    if (userData) {
      const users = JSON.parse(userData);
      return users;
    } else {
      console.log("No user data found in localStorage");
      return null;
    }
  }
}

// export const getDataFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const storedData = localStorage.getItem("user");
//     if (storedData) {
//       return JSON.parse(storedData);
//     }
//   }
//   return null;
// };
