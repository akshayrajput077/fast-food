import axios from "../../axios";

export async function getShopItems() {
  const res = await axios.get('/shop');
  return res.data;
}

export async function getShopItemById(id) {
  const res = await axios.get(`/shop/${id}`);
  return res.data;
}

