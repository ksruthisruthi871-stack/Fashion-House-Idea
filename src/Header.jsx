import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <div
          className="profile"
          style={{
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          👤
        </div>
      </Link>

      <Link to="/wishlist" style={{ textDecoration: "none" }}>
        <div
          className="wishlist"
          style={{
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          ❤️
        </div>
      </Link>
    </header>
  );
}
