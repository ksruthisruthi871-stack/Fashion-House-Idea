import { useWishlist } from "./useWishlist";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wishlist</h2>

      {wishlist.length === 0 ? (
        <p style={{ marginTop: "10px", color: "gray" }}>
          Wishlist is empty ❤️
        </p>
      ) : (
        <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  marginTop: "8px",
                  padding: "8px 10px",
                  border: "none",
                  background: "#e53935",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}