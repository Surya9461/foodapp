import React from "react";

const DosaPage = () => {
  const restaurants = [
    {
      name: "House1",
      item: "Dosa+sambar+chutney set",
      price: "45 Rs/set"
    },
    {
      name: "House2",
      item: "Dosa/egg curry set",
      price: "60 Rs/set"
    },
    {
      name: "House3",
      item: "Masala dosa",
      price: "50 Rs/set"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Houses offering Dosa 🍕</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {restaurants.map((rest, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "200px",
            background: "#fff8f0",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h3>{rest.name}</h3>
            <p><strong>{rest.pizza}</strong></p>
            <p>{rest.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DosaPage;
