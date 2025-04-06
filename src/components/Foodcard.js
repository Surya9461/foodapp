import "./Foodcard.css";
export default function Foodcard({ item }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '2px 2px 12px #eee',
      }}>
        <img src={item.image} alt={item.name} style={{ width: '100%' }} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    );
  }
  