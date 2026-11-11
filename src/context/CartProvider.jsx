import { CartContext } from "./cart-context.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { useAuth } from "../hooks/useAuth.js";

export function CartProvider({ children }) {
  const { user } = useAuth();

  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  const favouriteKey = user ? `ce-favs-${user.uid}` : "ce-favs-guest";

  const [favourites, setFavourites] = useLocalStorage(favouriteKey, []);

  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);

      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }

      return [...prev, { item, qty: 1 }];
    });
  }

  function changeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId));
  }

  function placeOrder(details) {
    const now = new Date().toISOString();

    const newOrder = {
      id: Date.now().toString(),
      ...details,
      items: cart,
      total,
      createdAt: now,
      placedAt: now,
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  }

  function toggleFavourite(itemId) {
    if (!user) return;

    setFavourites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        count,
        total,
        addToCart,
        changeQty,
        removeFromCart,
        placeOrder,
        favourites,
        toggleFavourite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
