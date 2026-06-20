import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ProductPage() {
  const { category } = useParams();

  const subOptions = {
    maggam: [
      { label: "Simple Work", key: "simple" },
      { label: "Pattu Saree", key: "pattu" },
      { label: "Bridal Work", key: "bridal" },
    ],

    simpleBlouse: [
      { label: "Back Design", key: "backDesign" },
      { label: "Hands", key: "handDesign" },
      { label: "Front Design", key: "frontDesign" },
    ],
     
    office: [
      { label: "formal Shirts", key: "formals" },
      { label: "Office Sarees", key: "officeSarees" },
      { label: "Blazer Sets", key: "Blazers" },
    ],

    women: [
      { label: "Chudidhar", key: "chudidhar" },
      { label: "Frocks", key: "frocks" },
      { label: "Lehenga", key: "lehenga" },
    ],

    kids: [
      { label: "Girls Wear", key: "girls" },
      { label: "Boys Wear", key: "boys" },
    ],

    uniform: [
      { label: "School", key: "school" },
      { label: "College", key: "college" },
    ],
  };

  const options = subOptions[category];

  if (!options) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Invalid Category</h2>
        <Link to="/categories">← Back</Link>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main style={{ padding: "20px" }}>
        <h2 style={{ textTransform: "uppercase" }}>
          {category} OPTIONS
        </h2>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {options.map((opt) => (
            <Link
              key={opt.key}
              to={`/products/${category}/${opt.key}`}
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h4>{opt.label}</h4>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}