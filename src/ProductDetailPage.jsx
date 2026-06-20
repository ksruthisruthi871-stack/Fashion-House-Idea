import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "./useCart";
import { useWishlist } from "./useWishlist";
import Footer from "./Footer";

const productDB = {
  maggam: {
    simple: [
      {
        id: 1,
        name: "Simple Maggam Work 1",
        price: 1200,
        rating: 4.3,
        material: "Silk",
        measurements: "Free size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWNv3ITROYdV4CqQmKSdews3L95Wr4ttwi8cXjWaJ-Q&s=10",
      },
      {
        id: 2,
        name: "Simple Maggam Work 2",
        price: 1500,
        rating: 4.5,
        material: "Silk",
        measurements: "Free size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCD0y67pnOPQG9b2U8jft4iL0PAVQ7QvJEdCtXEra1A&s=10",
      },
      {
        id: 3,
        name: "Simple Maggam Work 3",
        price: 1800,
        rating: 4.7,
        material: "Silk",
        measurements: "Free size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKrlQF33crXnVkxs9DWa-ch695q-ADu6asvmc7CJVaA&s=10",
      },
    ],

    pattu: [
      {
        id: 4,
        name: "Pattu Maggam 1",
        price: 5000,
        rating: 4.7,
        material: "Pure Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0e8gltnrbj7Eja6mf5Xs8jQU1kEauAZh1oIzGe9EVg&s=10",
      },
      {
        id: 5,
        name: "Pattu Maggam 2",
        price: 5500,
        rating: 4.8,
        material: "Pure Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyL-gBiEOlSZhGReVllSDL-BFuGfgvvPC0bqjRbfAQA&s=10",
      },
      {
        id: 6,
        name: "Pattu Maggam 3",
        price: 6000,
        rating: 4.9,
        material: "Pure Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVi_uCNXSNCBcvcnJgkH6OlfYim_K1uhx7hRxRkEfGhg&s=10",
      },
    ],

    bridal: [
      {
        id: 7,
        name: "Bridal Maggam 1",
        price: 12000,
        rating: 4.9,
        material: "Heavy Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZokQkT2JQkaIV6-iJ6VLKhObh1jgG95gsA9LFVmYgQ&s=10",
      },
      {
        id: 8,
        name: "Bridal Maggam 2",
        price: 13000,
        rating: 4.9,
        material: "Heavy Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFtNx4O4ks_dYi-nd2iH9FSihmuszJZQ-DApkWpDawg&s=10",
      },
      {
        id: 9,
        name: "Bridal Maggam 3",
        price: 14000,
        rating: 5.0,
        material: "Heavy Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcWmQrKVtYbsrIec-diLolu_hxA6x1dTOPIpjU9-qvQ&s=10",
      },
    ],
  },

  simpleBlouse: {
    backDesign: [
      {
        id: 10,
        name: "Back Design Blouse 1",
        price: 900,
        rating: 4.2,
        material: "Cotton",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_wadUj-MKlp1oRyFTwZ5GOr66peIR43SifMjuAt-Sg&s=10",
      },
      {
        id: 11,
        name: "Back Design Blouse 2",
        price: 1000,
        rating: 4.4,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XSYA9Uo_eZkoKf10kqybqBhsJHGRkIzEJyLittHdvQ&s=10",
      },
      {
        id: 12,
        name: "Back Design Blouse 3",
        price: 1100,
        rating: 4.5,
        material: "Silk Cotton",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGeczwFRmTHBwm_XK56gMnkybhI-vN77sUVxseX92aA&s=10",
      },
    ],

    handDesign: [
      {
        id: 13,
        name: "Hand Design Blouse 1",
        price: 950,
        rating: 4.3,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBPoKPqTEil8BWEdFh_AZz9Twu4yai4mIYMDG5IvgCP5dnELLtV7Dr7c&s=10",
      },
      {
        id: 14,
        name: "Hand Design Blouse 2",
        price: 1050,
        rating: 4.5,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6tH0laq2ftvLMDnoED5BWqm2S1w9ecwnWWzsSEnU8Q&s=10",
      },
      {
        id: 15,
        name: "Hand Design Blouse 3",
        price: 1150,
        rating: 4.6,
        material: "Premium Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTX6ia7fWkCyamPhkAi5ZaDzhacH6WGWhJdd31vbRqcA&s=10",
      },
    ],

    frontDesign: [
      {
        id: 16,
        name: "Front Design Blouse 1",
        price: 1000,
        rating: 4.4,
        material: "Cotton Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXprcxsvQGguZvuvjOwWTfHXDEkY5BbF1mcfZhtG6lWQ&s=10",
      },
      {
        id: 17,
        name: "Front Design Blouse 2",
        price: 1100,
        rating: 4.5,
        material: "Silk Cotton",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkgZqgH4Tvr7g4eNDGxqx4JF9MULk4EWI29oPXyaSbw&s=10",
      },
      {
        id: 18,
        name: "Front Design Blouse 3",
        price: 1200,
        rating: 4.7,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4xg4OMABndwYSSFcQXkwtgaQ7DjrD8MtRzNnSpaDxQ&s",
      },
    ],
  },

  office: {
  formals: [
    {
      id: 40,
      name: "Formal Shirt 1",
      price: 1200,
      rating: 4.3,
      material: "Cotton",
      measurements: "Custom",
              image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVFBu05YJ49FW8FN3ecOZAtuHVk83vON5SFK90ajr0Q&s=10",

    },
    {
      id: 41,
      name: "Formal Shirt 2",
      price: 1300,
      rating: 4.4,
      material: "Cotton Blend",
      measurements: "Custom",
             image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjqChdLUCSSQpYIG1eSOyYCVWLxfCiScw4o5zmu068A&s=10",
      
    },
    {
      id: 42,
      name: "Formal Shirt 3",
      price: 1400,
      rating: 4.5,
      material: "Premium Cotton",
      measurements: "Custom",
       image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpa15YaCWMpkt2tcp9m4qlf2QbtM9wkomxF9xnH7uug&s=10",
      },
  ],
  officeSarees: 
   [
    {
      id: 46,
      name: "Office Saree 1",
      price: 1800,
      rating: 4.3,
      material: "Cotton",
      measurements: "Standard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ywqRfI7QQRHsLe1uMVagsM9mQYA2F2QOvu9UzW7T9g&s=10",
    },
    {
      id: 47,
      name: "Office Saree 2",
      price: 2000,
      rating: 4.4,
      material: "Cotton Silk",
      measurements: "Standard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HvKaNK_SiZuktvnKGzg3chEMJ4ufETy1_8dt51vOHw&s=10",
    },
    {
      id: 48,
      name: "Office Saree 3",
      price: 2200,
      rating: 4.5,
      material: "Soft Cotton",
      measurements: "Standard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJznCnLqQzbUk_oquH1P_GKd9E9FeCLqLGt9AraMwLg&s=10",
    },
  ],
  
  Blazers: [
    {
      id: 52,
      name: "Blazer 1",
      price: 2500,
      rating: 4.4,
      material: "Wool Blend",
      measurements: "Custom",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    },
    {
      id: 53,
      name: "Blazer 2",
      price: 2800,
      rating: 4.5,
      material: "Polyester",
      measurements: "Custom",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACuA-70c7gmAhVyFWMBi60Em9cpmbKYNaUFhfRPlWCA&s=10",
    },
    {
      id: 54,
      name: "Blazer 3",
      price: 3000,
      rating: 4.6,
      material: "Premium Wool",
      measurements: "Custom",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
    },
  ],
  },

  women: {
    chudidhar: [
      {
        id: 20,
        name: "Chudidhar Set 1",
        price: 1200,
        rating: 4.3,
        material: "Cotton",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uI2D0Yk1YmJeGRWILKSpftuWnKIgKW6es6wP0xDBCw&s=10",
      },
      {
        id: 21,
        name: "Chudidhar Set 2",
        price: 1300,
        rating: 4.4,
        material: "Cotton",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqZYRDYIoGBHrZv8Ih6jLPVsNGnN_bbJPhZ79p5lp9g&s=10",
      },
      {
        id: 22,
        name: "Chudidhar Set 3",
        price: 1400,
        rating: 4.5,
        material: "Cotton Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylP75D-9m9QitgbKJqwolkdm469JxHPfYZoxDc-KOOapn7hrLTMivdsGq&s=10",
      },
    ],

    frocks: [
      {
        id: 23,
        name: "Frock 1",
        price: 1000,
        rating: 4.2,
        material: "Cotton",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQYVqvnst-fw8xnI8fKTbIByBZ3kQFz3tzPyiB2oicg&s=10",
      },
      {
        id: 24,
        name: "Frock 2",
        price: 1100,
        rating: 4.3,
        material: "Cotton",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9t3PeSK9BmEER_XQ4oM9eVtnxr7TqUPVYWkNjQBtZA&s=10",
      },
      {
        id: 25,
        name: "Frock 3",
        price: 1200,
        rating: 4.4,
        material: "Silk Cotton",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViYV3YaW0T0c0S4tg4OWBe0CNqJL0sg2hO5HXlH6J0Q&s=10",
      },
    ],

    lehenga: [
      {
        id: 26,
        name: "Lehenga 1",
        price: 2000,
        rating: 4.5,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8VV7Nlpdmd6vGWY4fTc2_-83fjUBz_DhLEmTk4YqJg&s=10",
      },
      {
        id: 27,
        name: "Lehenga 2",
        price: 2500,
        rating: 4.7,
        material: "Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeOCJFVw9Ulpjf-YOxl8igA018Pl0A-UVv1X7aKI0ng&s=10",
      },
      {
        id: 28,
        name: "Lehenga 3",
        price: 3000,
        rating: 4.8,
        material: "Bridal Silk",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqHk6of7cWxQkFz2sw77o9nP5iVK-cEMrG5QP8_lCqA&s=10",
      },
    ],
  },

  kids: {
    girls: [
      {
        id: 29,
        name: "Pattu Langa 1",
        price: 900,
        rating: 4.3,
        material: "Silk",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DwQZbkrd4Cd2kBE5GZcx_O8W9wrxJ-yDOBDRLZxi5A&s=10",
      },
      {
        id: 30,
        name: "Pattu Langa 2",
        price: 1000,
        rating: 4.4,
        material: "Silk",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Gt2XIFGop5udy54_t9isBjl6f63TINTj7Wk76wOgqg&s=10",
      },
      {
        id: 31,
        name: "Pattu Langa 3",
        price: 1100,
        rating: 4.5,
        material: "Silk Cotton",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttW7Mptp8WOWXczry60T22t6StZxCHhz0Dguv3RXXlgs8MvQhX2NruHI&s=10",
      },
    ],

    boys: [
      {
        id: 32,
        name: "Kurtha Dhothi 1",
        price: 900,
        rating: 4.3,
        material: "Cotton Silk",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16aC_1zABVwlXH89U2RrcOJhqOLKyX_j1VBUNDSwJjQ&s=10",
      },
      {
        id: 33,
        name: "Kurtha Dhothi 2",
        price: 950,
        rating: 4.4,
        material: "Cotton Silk",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IyjWSmrVewhZD8XkjqoM6_pMfayAFcYAJlYS7M7m7w&s=10",
      },
      {
        id: 34,
        name: "Kurtha Dhothi 3",
        price: 1000,
        rating: 4.5,
        material: "Silk",
        measurements: "Kids size",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzM7D370yWZ4lCzLLD3A7_ayUYPTHo-BqzjSE08Y1iw&s=10",
      },
    ],
  },

  uniform: {
    school: [
      {
        id: 35,
        name: "School Uniform 1",
        price: 700,
        rating: 4.2,
        material: "Polyester",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmR5GcW5ZwJbQvei6LEqnE42k5Ab7unb94EVVQZ1jNMA&s=10",
      },
      {
        id: 36,
        name: "School Uniform 2",
        price: 750,
        rating: 4.3,
        material: "Polyester",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeXOmuwlIA4Vb-jdjR3IS5ph7fGB0lqyWIQTKABeDzw&s=10",
      },
      {
        id: 37,
        name: "School Uniform 3",
        price: 800,
        rating: 4.4,
        material: "Poly Cotton",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN43HzfmFroSz0iBhLR3N6JZaeJsR4cOaKEWWRMZmBw&s=10",
      },
    ],

    college: [
      {
        id: 38,
        name: "College Uniform 1",
        price: 900,
        rating: 4.3,
        material: "Cotton Blend",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_swdH3exS4BZP8VQWjDlcpqhTvPR8siGg2I7PBS12ZQ&s=10",
      },
      {
        id: 39,
        name: "College Uniform 2",
        price: 950,
        rating: 4.4,
        material: "Cotton Blend",
        measurements: "Standard",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmJ8GAknd0_SN9FT-sRNQtIN-q6oT0o4XDj9Cno7k_w&s=10",
      },
      {
        id: 43,
        name: "College Uniform 3",
        price: 1000,
        rating: 4.5,
        material: "Premium Cotton",
        measurements: "Custom",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsxe8LkDs9bg87QKKYsna_drmMFk8rk-eLNu53rW20g&s=10",
      },
    ],
  },
};



export default function ProductDetailPage() {
  const { category, item } = useParams();
const navigate = useNavigate();
const { addToCart } = useCart();
const { addToWishlist } = useWishlist();
  const products = productDB?.[category]?.[item];

  console.log("category:", category);
  console.log("item:", item);
  console.log("products:", products);

  // ✅ 1. Handle invalid route safely FIRST
  if (!products) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No products found</h2>
        <p>
          Check if DB has: <b>{category} → {item}</b>
        </p>
        <Link to="/categories">← Back</Link>
      </div>
    );
  }

  // ✅ 2. Render UI ONLY inside return
  return (
    <div style={{ padding: "20px" }}>
      <Link to={`/products/${category}`}>← Back</Link>

      <h2>
        {category} → {item}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "250px",
              borderRadius: "10px",
              position: "relative",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Wishlist & Share */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                gap: "6px",
              }}
            >
              <button
                onClick={() => {
                  addToWishlist(p);
                  alert("Added to Wishlist");
                }}
                style={{
                  border: "none",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              >
                ❤️
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: p.name,
                      text: p.name,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied");
                  }
                }}
                style={{
                  border: "none",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              >
                🔗
              </button>
            </div>

            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <p>⭐ {p.rating}</p>
            <p>{p.material}</p>
            <p>{p.measurements}</p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => {
                  addToCart(p);
                  localStorage.setItem("selectedProduct", JSON.stringify(p));
                  navigate("/cart");
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#6a1b9a",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Add Cart
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("selectedProduct", JSON.stringify(p));
                  navigate("/buy-now", {
                    state: { product: p },
                  });
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </div>

          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}