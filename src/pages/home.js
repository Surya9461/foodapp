import { useNavigate } from "react-router-dom";
import foodData from "../data/foodData";
import FoodCard from "../components/Foodcard";

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    if (item.name.toLowerCase() === "dosa") {
      navigate("/dosa");
    }
    // You can add more navigation for other items here later
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🍽️ Our Menu</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "2rem",
        }}
      >
        {foodData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            style={{
              cursor: item.name.toLowerCase() === "dosa" ? "pointer" : "default",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (item.name.toLowerCase() === "dosa") {
                e.currentTarget.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FoodCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
