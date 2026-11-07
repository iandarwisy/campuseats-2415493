import MenuItemCard from "./MenuItemCard.jsx";

function MenuList({ items }) {
  if (!items || items.length === 0) {
    return <p className="muted">No menu items found.</p>;
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;
