function Footer() {
  const year = new Date().getFullYear();

  return <footer className="footer">© {year} CampusEats</footer>;
}

export default Footer;
