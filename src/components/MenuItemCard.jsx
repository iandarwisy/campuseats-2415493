function MenuItemCard() {
  const item = {
    name: "Nasi Tomato",
    description: "Nasi tomato with Ayam Masak Merah",
    price: 7.5,
    available: false,
  };

  return (
    <div className="menu-card">
      <h3>{item.name}</h3>

      <p>{item.description}</p>

      <p>RM {item.price.toFixed(2)}</p>

      <button className="btn" disabled={!item.available}>
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
}

export default MenuItemCard;
