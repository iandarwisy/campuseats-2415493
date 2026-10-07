function VendorCard() {
  const vendor = {
    name: "Kafe Mahallah Salahuddin",
    location: "Mahallah Salahuddin",
    openHours: "7:00 am - 10:00 pm",
    isOpen: false,
  };

  return (
    <div className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>

      <h3>{vendor.name}</h3>

      <p>{vendor.location}</p>

      <p>{vendor.openHours}</p>

      <p className={vendor.isOpen ? "status open" : "status closed"}>
        {vendor.isOpen ? "Open now" : "Closed"}
      </p>
    </div>
  );
}

export default VendorCard;
