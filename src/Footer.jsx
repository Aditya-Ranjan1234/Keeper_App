import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Aditya Ranjan {year}</p>
    </footer>
  );
}

export default Footer;
