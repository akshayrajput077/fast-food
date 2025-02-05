import axios from "../../axios"; // Your axios instance
import Cookies from "js-cookie";

export async function registration(firstName, lastName, emailId, mobile, address, city, password) {
  const res = await axios.post('/user', {
    firstName,
    lastName,
    emailId,
    mobile,
    address,
    city,
    password
  });
  return res;
}

export async function verifyOtp({ emailId, otp }) {
  const res = await axios.post('/user/verifyOtp', { emailId, otp });
  return res.data;
}

export async function resendOtp({ emailId }) {
  const res = await axios.put('/user/resendOtp', { emailId });
  return res.data;
}

export async function user_forgotPassword({ emailId }) {
  const res = await axios.put('/user/user_forgotPassword', { emailId });
  console.log("user_forgotPassword", res)
  const { data } = res.data;
  return data;
}

export async function resetPassword({ otp, password }) {
  const res = await axios.post('/user/resetPassword', { otp, password });
  console.log('resetPassword', res)
  return res.data;
}


