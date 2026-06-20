import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Link to="/checkout" style={styles.left}>
        🛒 Cart
      </Link>

      <Link to="/tracking" style={styles.right}>
        📦 My Orders
      </Link>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "100px",  // 👈 pushes footer a bit down
    marginBottom: "20px",   // 👈 gives space below

    padding: "12px 20px",
    backgroundColor: "white",
    boxShadow: "0 -2px 8px rgba(0,0,0,0.1)"
  },

  left: {
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "20px",
    backgroundColor: "#f5f5f5",
    color: "#333"
  },

  right: {
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "20px",
    backgroundColor: "#f5f5f5",
    color: "#333"
  }
};