import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function getStoredProduct() {
  try {
    const saved = localStorage.getItem("selectedProduct");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function getStoredAddresses() {
  try {
    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function BuyNowPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product || getStoredProduct();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("cod");

  const [savedAddresses, setSavedAddresses] = useState(getStoredAddresses);

  const saveAddress = () => {
    if (!address || !phone) {
      alert("Please fill address and phone");
      return;
    }

    const newAddress = {
      id: Date.now(),
      address,
      phone,
    };

    const updated = [...savedAddresses, newAddress];

    setSavedAddresses(updated);

    localStorage.setItem(
      "addresses",
      JSON.stringify(updated)
    );

    alert("Address Saved");
  };

  const deleteAddress = (id) => {
    const updated = savedAddresses.filter(
      (item) => item.id !== id
    );

    setSavedAddresses(updated);

    localStorage.setItem(
      "addresses",
      JSON.stringify(updated)
    );
  };

  const editAddress = (item) => {
    setAddress(item.address);
    setPhone(item.phone);

    deleteAddress(item.id);
  };

  const handleOrder = () => {
    if (!product) {
      alert("No product selected.");
      return;
    }

    if (!address || !phone) {
      alert("Fill all details");
      return;
    }

    const order = {
      ...product,
      id: Date.now(),
      address,
      phone,
      payment,
      status: "Ordered",
      orderDate: new Date().toLocaleDateString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const updatedOrders = [order, ...existingOrders];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    localStorage.setItem("currentOrder", JSON.stringify(order));

    navigate("/confirm");
  };

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No product selected</h2>
        <button onClick={() => navigate("/categories")}>Go to Products</button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2>Buy Now</h2>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "200px",
          borderRadius: "10px",
        }}
      />

      <h3>{product.name}</h3>

      <p>
        <b>Price:</b> ₹{product.price}
      </p>

      <hr />

      <h3>Saved Addresses</h3>

      {savedAddresses.length === 0 && (
        <p>No saved addresses</p>
      )}

      {savedAddresses.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <p>{item.address}</p>
          <p>{item.phone}</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => {
                setAddress(item.address);
                setPhone(item.phone);
              }}
            >
              Select
            </button>

            <button
              onClick={() =>
                editAddress(item)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteAddress(item.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h3>Add New Address</h3>

      <textarea
        rows="4"
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button
        onClick={saveAddress}
        style={{
          padding: "10px 20px",
        }}
      >
        Save Address
      </button>

      <hr />

      <h3>Payment Method</h3>

      <select
        value={payment}
        onChange={(e) =>
          setPayment(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <option value="cod">
          Cash on Delivery
        </option>

        <option value="upi">
          UPI
        </option>

        <option value="gpay">
          Google Pay
        </option>

        <option value="phonepe">
          PhonePe
        </option>

        <option value="paytm">
          Paytm
        </option>
      </select>

      <br />
      <br />

      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          padding: "12px",
          background: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}