
"use client"
import { useEffect, useState } from "react";
import { deleteOrderRecord, getOrderRecord } from "@/services/order/order";
import { localData } from "@/services/auth/signIn.service";
import { useRouter } from 'next/navigation';
import SignIn from "../Auth/Signin";
import NotFound from "../Common/not_found";
import Button from "../button/button";
import BrowserStorageService from "@/services/localStroage/BrowserStorageService";

export default function AllRecord() {
  const [loading, setLoading] = useState(true)
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState("");
  const router = useRouter()
  const intialValue = 1
  // let loggedInUser = "";

  useEffect(() => {
    async function fetchdata() {
      const loggedInUser = JSON.parse(BrowserStorageService.get('User') || intialValue);
      if (loggedInUser) {
        setUser(loggedInUser ?? "");
        setLoading(false)
      }
    }
    fetchdata()
  }, []);

  useEffect(() => {
    if (user) {
      async function fetchHistory() {
        const data = await getOrderRecord(user.ID);
        const userOrders = data.data.filter(order => order.ID === user.ID);
        setRecord(userOrders.sort((a, b) => b.id - a.id));
        setLoading(false)
      }
      fetchHistory();
    }
    console.log("user", user)
  }, [user]);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  const handleDelete = async (id) => {
    console.log(id)
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        const result = await deleteOrderRecord(id);
        console.log("Deleted successfully:", result);
        window.location.reload()
      } catch (error) {
        console.error("Deletion failed:", error);
      }
    }
  }
  // if (loading) return <div>Loading ...</div>
  return (
    <section className="p-4">
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      ) : record.length === 0 ? (
        // <p>No orders found for your account.</p>

        <NotFound title="No orders found for your account" />
      ) : (

        record.map((items) => (
          <div key={items.id} className="mt-4">
            <div className="flex justify-end">
              <button className="text-white hover:text-orange-600 border border-orange-600 bg-orange-600 hover:bg-white outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-1 text-center me-2 mb-2 m-1" onClick={() => handleDelete(items.id)}>Delete</button>
            </div>
            <div className="rounded-xl border border-gray-200">
              <div className="bg-orange-600 rounded-t-lg p-2 text-white flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">Payment ID : {items.payment_id}</h2>
                </div>
                <div className="text-left sm:px-0 md:px-10 lg:px-16 xl:px-0 xxl:px-0">
                  Date : {formatDate(items.created_at)}
                </div>
              </div>
              <div className="overflow-x-auto p-4">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">S.No</th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Item Names</th>
                      <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Total Item</th>
                      <th className="whitespace-nowrap px-4 py-2 text-right font-medium text-gray-900">Total Amount</th>
                    </tr>
                  </thead>
                  {items.items.map((item, index) => (
                    <tbody className="divide-y divide-gray-200" key={index}>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">{index + 1}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">{item.item_name}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">{item.quantity}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-right text-gray-700">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}/-</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
              <div className="rounded-b-lg bg-orange-600 p-2 text-white flex justify-between">
                <div>
                  <h2 className="text-lg font-bold uppercase">Total</h2>
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold">₹{items.payment_amount.toFixed(2)}/-</h2>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
