import { NavLink } from "react-router";
import { useCart } from "../hooks/useCart.js";
import { useAuth } from "../hooks/useAuth.js";

function Header() {
  const { count } = useCart();
  const { user, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>

      <nav className="nav">
        <NavLink to="/" end>
          Vendors
        </NavLink>

        <NavLink to="/favourites">Favourites</NavLink>

        <NavLink to="/orders">Orders</NavLink>

        <NavLink to="/cart" className="cart">
          Cart <span className="badge">{count}</span>
        </NavLink>

        {user ? (
          <>
            <span className="user-info">{user.displayName || user.email}</span>

            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
