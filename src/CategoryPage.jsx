import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function CategoryPage() {
  const categories = [
    {
      name: "Maggam Blouse Designs",
      slug: "maggam",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTAJM22SBBmfvuz23rQb-o9iBPMmoWlp10nLb-JtQVA&s=10"
    },
    {
      name: "Simple Blouse Designs",
      slug: "simpleBlouse",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR_ObBEZro9nj1d1myYj4RqKm3Y86e_WBGhNUALrcsg&s=10"
    },
    {
      name: "Formal Office Wear",
      slug: "office",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKGyK-hxEDLdCcdSb1i0BoBRmEPsylvgyhIbQZ6ZkNA&s=10"
    },
    {
      name: "Womens Fashion Dresses",
      slug: "women",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvoYVCNLHG440KAEcfS78Pgp38bPmbncANn1VVQVT8Q&s=10"
    },
    {
      name: "Kids Wear",
      slug: "kids",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXVRMPxcn05nne-D53zgGZjoDy9Yvpso3txJoE7vvPw&s"
    },
    {
      name: "Uniform Stitching",
      slug: "uniform",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrixec0Hdilq3uKOJ_yAYeR8WdSCL80tzMkiyCEcw94A&s=10"
    }
  ];

  return (
    <>
      <Header />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "15px",
          padding: "20px"
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products/${cat.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <p
                style={{
                  padding: "6px",
                  fontSize: "14px",
                  fontWeight: "500"
                }}
              >
                {cat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}