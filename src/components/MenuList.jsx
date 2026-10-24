import MenuItemCard from "./MenuItemCard.jsx";

function MenuList({ items, onAdd, favourites, onToggleFavourite }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={onAdd}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default MenuList;
