import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

import IndexPage from "./IndexPage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import ProductDetailPage from "./ProductDetailPage";

import CartPage from "./CartPage";
import BuyNowPage from "./BuyNowPage";
import CheckoutPage from "./CheckOutPage";

import OrderConfirmPage from "./OrderConfirmPage";
import OrderTrackingPage from "./OrderTrackingPage";

import Signup from "./Signup";
import Signin from "./SignIn";
import Profile from "./Profile";
import Wishlist from "./Wishlist";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Home */}
        <Route path="/" element={<IndexPage />} />

        {/* Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Shopping */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/buy-now" element={<BuyNowPage />} />

        {/* Categories & Products */}
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route
          path="/products/:category/:item"
          element={<ProductDetailPage />}
        />

        {/* Orders */}
        <Route path="/confirm" element={<OrderConfirmPage />} />
        <Route path="/tracking" element={<OrderTrackingPage />} />
      </Routes>
    </CartProvider>
  );
}