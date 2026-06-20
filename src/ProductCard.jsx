import { useNavigate } from "react-router-dom";
import { useCart } from "./useCart";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: product.name,
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        width: "320px",
        background: "#e7c0d9",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Wishlist & Share */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          gap: "8px",
          zIndex: 1,
        }}
      >
        <button
          onClick={() => navigate("/wishlist")}
          title="Wishlist"
          style={{
            border: "none",
            background: "white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ❤️
        </button>

        <button
          onClick={handleShare}
          title="Share"
          style={{
            border: "none",
            background: "white",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          🔗
        </button>
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        onClick={() =>
          navigate(`/product/${product.id}`, { state: product })
        }
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      />

      {/* Product Details */}
      <h3
        style={{
          marginTop: "12px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {product.name}
      </h3>

      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        ₹{product.price}
      </p>

      {product.rating && <p>⭐ {product.rating}</p>}
      {product.material && <p>{product.material}</p>}
      {product.type && <p>{product.type}</p>}

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => addToCart(product)}
          style={{
            flex: 1,
            padding: "12px",
            background: "#6a1b9a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </button>

        <button
          onClick={() =>
            navigate(`/buy/${product.id}`, { state: product })
          }
          style={{
            flex: 1,
            padding: "12px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}