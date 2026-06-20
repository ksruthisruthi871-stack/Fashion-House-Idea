import { useNavigate } from "react-router-dom";
import { useCart } from "./useCart";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>No items in cart</p>

          <button
            onClick={() => navigate("/categories")}
            style={{
              padding: "10px",
              background: "#6a1b9a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                {item.rating && <p>⭐ {item.rating}</p>}

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: "8px 12px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Remove
                </button>

                <button
                  onClick={() =>
                    navigate("/buy-now", {
                      state: { product: item },
                    })
                  }
                  style={{
                    padding: "8px 12px",
                    background: "#ff9800",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => navigate("/categories")}
            style={{
              padding: "10px 15px",
              background: "#6a1b9a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}