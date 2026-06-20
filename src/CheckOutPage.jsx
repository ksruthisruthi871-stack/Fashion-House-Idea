import { useCart } from "./useCart";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒Your cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

            <button
              onClick={() =>
                navigate("/buy-now", {
                  state: { product: item },
                })
              }
              style={{ marginLeft: "10px" }}
            >
              Buy Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}