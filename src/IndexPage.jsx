import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const isSignedUp = (() => {
    try {
      return Boolean(localStorage.getItem("user"));
    } catch {
      return false;
    }
  })();

  const handleEnter = () => {
    if (isSignedUp) {
      navigate("/categories");
    } else {
      if (checked) {
        navigate("/signup");
      } else {
        alert("Please agree before entering!");
      }
    }
  };

  return (
    <div className="splash">
      <h1>Fashion Home Ideas</h1>

      <p style={{ color: "darkblue" }}>
        "Fashion up yourself with your own design"<br />
        "We are here to assist you"
      </p>

      <img
        src="https://previews.123rf.com/images/sunarko/sunarko2302/sunarko230200416/198986980-beautiful-dress-woman-logo-simple-creative-for-boutique-fashion-shop-logo-vector.jpg"
        alt="image"
        width="200"
        height="200"
        style={{
          borderRadius: "15px",
          margin: "10px",
          border: "2px solid #ddd",
        }}
      />

      {/* Show checkbox only if not signed up */}
      {!isSignedUp && (
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />{" "}
          I agree to continue
        </label>
      )}

      <button className="btn" onClick={handleEnter}>
        {isSignedUp ? "Enter Website 🌐" : "Continue"}
      </button>
    </div>
  );
}