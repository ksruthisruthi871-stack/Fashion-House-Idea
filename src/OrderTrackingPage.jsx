import { useState } from "react";

export default function OrderTrackingPage() {
  const stages = [
    "Ordered ✅",
    "Cutting ✂️",
    "Stitching 🧵",
    "Stitched ✔️",
    "Out for Delivery 🚚",
    "Delivery 📦",
    "Delivered 🎉",
  ];

  const [currentStage] = useState(2);
  const [cancelled, setCancelled] = useState(false);

  const savedOrders = (() => {
    try {
      return JSON.parse(localStorage.getItem("orders") || "[]");
    } catch {
      return [];
    }
  })();

  const currentOrder = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem("currentOrder") || "null");
      if (saved && saved.status !== "Cancelled") {
        return saved;
      }
      return savedOrders.find((o) => o.status !== "Cancelled") || null;
    } catch {
      return savedOrders.find((o) => o.status !== "Cancelled") || null;
    }
  })();

  const cancelOrder = () => {
    if (!currentOrder) return;

    const updatedOrders = savedOrders.filter((o) => o.id !== currentOrder.id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    localStorage.removeItem("currentOrder");
    setCancelled(true);
  };

  if (cancelled) {
    return (
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h2 style={{ color: "red" }}>❌ Order Cancelled</h2>
        <p>Your order has been cancelled successfully.</p>
      </div>
    );
  }

  if (!currentOrder) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>No Orders Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h2>Order Details</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <img
          src={currentOrder.image}
          alt={currentOrder.name}
          width="120"
          height="120"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <div>
          <h3>{currentOrder.name}</h3>
          <p>₹{currentOrder.price}</p>
          <p>{currentOrder.address}</p>
          <p>{currentOrder.phone}</p>
        </div>
      </div>

      <h3>Tracking Status</h3>

      {currentStage < 6 && (
        <button
          onClick={cancelOrder}
          style={{
            background: "red",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Cancel Order
        </button>
      )}

      <div style={{ marginTop: "20px" }}>
        {stages.map((stage, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: index <= currentStage ? "green" : "#ccc",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>

            <div>
              <h4
                style={{
                  margin: 0,
                  color: index <= currentStage ? "green" : "#666",
                }}
              >
                {stage}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {currentStage === 6 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#e8f5e9",
            borderRadius: "10px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          🎉 Your Order Has Been Delivered Successfully
        </div>
      )}
    </div>
  );
}
