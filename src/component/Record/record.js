
"use client"
import { useEffect, useState } from "react";
import { getOrderRecord } from "@/services/order/order";
import { localData } from "@/services/auth/signIn.service";
import { useRouter } from 'next/navigation';
import SignIn from "../Auth/Signin";
import NotFound from "../Common/not_found";

export default function AllRecord() {
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter()
  // let loggedInUser = "";
  useEffect(() => {
    async function fetchdata() {
      const loggedInUser = await localData();
      if (loggedInUser) {
        setUser(loggedInUser ?? "");
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
      // second: 'numeric',
      hour12: true, // Set to false if you prefer 24-hour format
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options); // Use toLocaleString for both date and time
  };


  // if (!user) {
  //   return <>{showLoginModal && (
  //     <SignIn onClose={handleCloseModal} />
  //   )}
  //     <NotFound title="You need to log in to view your records." /></>;
  // }

  return (
    <section className="p-4">
      {record.length === 0 ? (
        // <p>No orders found for your account.</p>
        <NotFound title="No orders found for your account" />
      ) : (
        record.map((items) => (
          <div className="rounded-xl border border-gray-200 mt-4" key={items.id}>
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
        ))
      )}
    </section>
  );
}
