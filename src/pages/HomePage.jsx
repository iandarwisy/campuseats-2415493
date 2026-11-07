import { useVendors } from "../hooks/useVendors.js";
import VendorCard from "../components/VendorCard.jsx";

function HomePage() {
  const { vendors, loading, error, reload } = useVendors();

  if (loading) {
    return <p className="muted">Loading vendors...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="muted">Error: {error}</p>
        <button className="btn" onClick={reload}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <section>
      <h2 className="section-title">Today's vendors</h2>

      <div className="grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
