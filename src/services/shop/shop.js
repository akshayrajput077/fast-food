import axios from "../../axios";

export async function shop(item_name, price, image, category) {
  const res = await axios.post('/shop', {
    item_name, price, image, category
  });
  console.log("res", res)
  return res;
}

export async function getShopItems() {
  const res = await axios.get('/shop');
  return res.data;
}

export async function getShopItemById(id) {
  const res = await axios.get(`/shop/${id}`);
  return res.data;
}
