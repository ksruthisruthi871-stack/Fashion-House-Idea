import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>My Profile</h2>

      {/* User Details */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
          background: "#fff",
        }}
      >
        <h3>Account Information</h3>

        <p>
          <strong>Full Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Mobile Number:</strong> {user.phone}
        </p>
      </div>

      {/* Customer Support */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
          background: "#fff",
        }}
      >
        <h3>Customer Support & Help</h3>

        <div style={{ marginBottom: "15px" }}>
          <strong>FAQs</strong>

          <ul>
            <li>How can I track my order?</li>
            <li>How can I cancel my order?</li>
            <li>How long does delivery take?</li>
            <li>How do I update my profile?</li>
          </ul>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Live Chat Coming Soon")}
        >
          💬 Live Chat
        </button>

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Call: 1800-123-456")}
        >
          📞 Helpline: 1800-123-456
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          padding: "12px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}