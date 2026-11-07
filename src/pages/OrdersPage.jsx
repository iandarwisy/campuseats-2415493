import { useCart } from "../hooks/useCart.js";

function formatOrderDate(order) {
  const raw = order.placedAt || order.createdAt || order.date;
  const parsed = new Date(raw);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleString();
  }
  // Fallback for existing orders in localStorage using the numeric order.id timestamp
  if (order.id && !isNaN(Number(order.id))) {
    return new Date(Number(order.id)).toLocaleString();
  }
  return raw || "";
}

function OrdersPage() {
  const { orders } = useCart();

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      {orders.length === 0 ? (
        <p className="muted">No orders yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {orders.map((order) => (
            <article key={order.id} className="card">
              <h3>Order #{order.id}</h3>
              <p className="muted">
                {formatOrderDate(order)}
                {order.name
                  ? ` • ${order.name} (Mahallah ${order.mahallah}, Pickup: ${order.pickupTime})`
                  : ""}
              </p>
              <ul
                style={{ listStyle: "none", padding: 0, margin: "0.75rem 0" }}
              >
                {order.items.map((line) => (
                  <li key={line.item.id} style={{ padding: "0.25rem 0" }}>
                    {line.item.name} × {line.qty}
                  </li>
                ))}
              </ul>
              <p className="price" style={{ marginBottom: 0 }}>
                Total: RM {Number(order.total).toFixed(2)}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default OrdersPage;
