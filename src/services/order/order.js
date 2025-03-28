
import axios from "../../axios";


export async function insertOrder(orderData) {
  const res = await axios.post('/order', orderData);
  return res.data;
}

export async function getOrderRecord() {
  const res = await axios.get('/order');
  return res.data;
}

export async function deleteOrderRecord(id) {
  const res = await axios.delete(`/order/${id}`);
  console.log(res.data)
  return res.data;
}