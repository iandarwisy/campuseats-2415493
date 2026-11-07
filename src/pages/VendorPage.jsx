import { useState } from "react";
import { useParams, Link } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import { useCart } from "../hooks/useCart.js";
import MenuList from "../components/MenuList.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { favourites } = useCart();
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">We could not find a vendor with ID "{id}".</p>
        <Link
          to="/"
          className="btn"
          style={{
            display: "inline-block",
            width: "auto",
            marginTop: "0.5rem",
            textDecoration: "none",
          }}
        >
          Back to Vendors
        </Link>
      </div>
    );
  }

  const displayMenu = vendor.menu.filter((item) =>
    showFavouritesOnly ? favourites.includes(item.id) : true,
  );

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 className="section-title">{vendor.name}</h2>
          <p className="muted">
            {vendor.location} • {vendor.openHours}
          </p>
        </div>

        <label
          style={{
            cursor: "pointer",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            checked={showFavouritesOnly}
            onChange={(e) => setShowFavouritesOnly(e.target.checked)}
          />
          Show Favourites Only ❤️
        </label>
      </div>

      <MenuList items={displayMenu} />
    </section>
  );
}

export default VendorPage;
