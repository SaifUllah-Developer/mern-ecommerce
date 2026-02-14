import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoData from "../components/NoData";
import SummaryApi, { baseURL } from "../common/SummaryApi";
import axios from "axios";
import toast from "react-hot-toast";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.order);
  const [cancellingOrderId, setCancellingOrderId] = useState(null);

  console.log("order Items", orders);

  const handleCancelOrder = async (orderId) => {
    try {
      setCancellingOrderId(orderId);
      const response = await axios.put(
        baseURL + SummaryApi.cancelOrder.url,
        { orderId: orderId },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Refresh orders list
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error(response.data.message || "Failed to cancel order");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel order");
      console.error("Cancel order error:", error);
    } finally {
      setCancellingOrderId(null);
    }
  };

  const isOrderCancellable = (order) => {
    return order.order_status && order.order_status !== "delivered" && order.order_status !== "cancelled";
  };

  return (
    <div>
      <div className="bg-white shadow-md p-3 font-semibold">
        <h1>Orders</h1>
      </div>

      {!orders[0] && <NoData />}
      {orders.map((order, index) => {
        return (
          <div key={order._id + index + "order"} className="order rounded p-4 text-sm bg-white shadow-sm m-3 border">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold mb-2">Order No : {order?.orderId}</p>
                <div className="flex gap-3 mb-3">
                  <img
                    src={order.product_details.image[0]}
                    className="w-14 h-14 rounded"
                    alt={order.product_details.name}
                  />
                  <div>
                    <p className="font-medium">{order.product_details.name}</p>
                    <p className="text-gray-600">Amount: Rs {order.totalAmt}</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Status:{" "}
                      <span
                        className={`font-semibold ${order.order_status === "cancelled" ? "text-red-600" : "text-green-600"}`}
                      >
                        {order.order_status || "pending"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {isOrderCancellable(order) && (
                  <button
                    onClick={() => {
                      toast.loading("Cancelling order...");
                      handleCancelOrder(order._id);
                    }}
                    disabled={cancellingOrderId === order._id}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-semibold disabled:bg-gray-400"
                  >
                    {cancellingOrderId === order._id ? "Cancelling..." : "Cancel Order"}
                  </button>
                )}
                {order.order_status === "cancelled" && (
                  <span className="px-3 py-2 bg-gray-300 text-gray-700 rounded text-xs font-semibold">Cancelled</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
