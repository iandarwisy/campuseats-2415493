import { useVendors } from "../hooks/useVendors.js";
import { useCart } from "../hooks/useCart.js";
import MenuList from "../components/MenuList.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";

function FavouritesPage() {
  const { vendors, loading, error, reload } = useVendors();
  const { favourites } = useCart();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const favItems = vendors
    .flatMap((v) => v.menu)
    .filter((item) => favourites.includes(item.id));

  return (
    <section>
      <h2 className="section-title">Your Favourite Items ❤️</h2>
      {favItems.length === 0 ? (
        <p className="muted">
          You haven't added any favourite items yet. Click the heart icon on any
          menu item!
        </p>
      ) : (
        <MenuList items={favItems} />
      )}
    </section>
  );
}

export default FavouritesPage;
