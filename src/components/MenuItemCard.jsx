import { Link } from "react-router";
import { useCart } from "../hooks/useCart.js";
import { useAuth } from "../hooks/useAuth.js";

function MenuItemCard({ item }) {
  const { addToCart, favourites = [], toggleFavourite } = useCart() || {};
  const { user } = useAuth();

  const isFavourite = favourites.includes(item.id);

  return (
    <article className="card menu-card">
      <div className="thumb" aria-hidden="true">
        {item.name.charAt(0)}
      </div>

      <p className="tag">{item.category}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{item.name}</h3>

        {user ? (
          <button
            type="button"
            onClick={() => toggleFavourite(item.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title={isFavourite ? "Remove from favourites" : "Add to favourites"}
          >
            {isFavourite ? "❤️" : "🤍"}
          </button>
        ) : (
          <Link to="/login">Log in to save favourites</Link>
        )}
      </div>

      <p className="muted">{item.description}</p>

      <p className="price">RM {item.price.toFixed(2)}</p>

      <button
        className="btn"
        disabled={!item.available}
        onClick={() => addToCart && addToCart(item)}
      >
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </article>
  );
}

export default MenuItemCard;
