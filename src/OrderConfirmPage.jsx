import { useNavigate } from "react-router-dom";

export default function OrderConfirmPage() {
  const navigate = useNavigate();

  const order = JSON.parse(
    localStorage.getItem("currentOrder")
  );

  if (!order) {
    return <h2>No Order Found</h2>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "green" }}>
        ✅ Order Confirmed
      </h1>

      <img
        src={order.image}
        alt={order.name}
        width="200"
        style={{ borderRadius: "10px" }}
      />

      <h2>{order.name}</h2>
      <h3>₹{order.price}</h3>

      <p>
        Your order has been placed successfully.
      </p>

      <button
        onClick={() => navigate("/tracking")}
        style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Track Order
      </button>
    </div>
  );
}