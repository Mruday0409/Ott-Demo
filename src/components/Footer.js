import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topRow}>
        {/* Left Logo + Socials */}
        <div>
          <h2 style={styles.logo}>OTT</h2>
          <p>Connect with us</p>
          <div style={styles.socials}>
            <a href="#" style={styles.icon}>📸</a>
            <a href="#" style={styles.icon}>📘</a>
            <a href="#" style={styles.icon}>✖</a>
          </div>
          <p style={{ marginTop: "10px" }}>Download OTT mobile app</p>
          <div style={styles.stores}>
            <button style={styles.storeBtn}>Google Play</button>
            <button style={styles.storeBtn}>App Store</button>
          </div>
          <p style={{ marginTop: "10px" }}>
            Contact us: <a href="mailto:support@ott.video" style={styles.link}>support@ott.video</a>
          </p>
        </div>

        {/* Popular Telugu Movies */}
        <div>
          <h4>Popular Telugu Movies</h4>
          <p>Movie A</p>
          <p>Movie B</p>
          <p>Movie C</p>
        </div>

        {/* Must Watch Movies */}
        <div>
          <h4>Must Watch Movies</h4>
          <p>Movie D</p>
          <p>Movie E</p>
          <p>Movie F</p>
        </div>

        {/* OTT Originals */}
        <div>
          <h4>OTT Originals</h4>
          <p>Show A</p>
          <p>Show B</p>
          <p>Show C</p>
        </div>

        {/* Genres */}
        <div>
          <h4>Genres</h4>
          <p>Drama</p>
          <p>Comedy</p>
          <p>Action</p>
          <p>Romance</p>
          <p>Thriller</p>
        </div>

        {/* Learn More */}
        <div>
          <h4>Learn More</h4>
          <p>View Plans</p>
          <p>About Us</p>
          <p>FAQs / Help</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <div style={styles.bottomRow}>
        <p>© Copyright 2025 OTT Media and Broadcasting Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px"
  },
  topRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  },
  logo: {
    fontSize: "28px",
    color: "#ff6600",
    marginBottom: "10px"
  },
  socials: {
    display: "flex",
    gap: "10px",
    marginTop: "5px"
  },
  icon: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none"
  },
  stores: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },
  storeBtn: {
    background: "#222",
    color: "#fff",
    border: "1px solid #444",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  link: {
    color: "orange",
    textDecoration: "none"
  },
  bottomRow: {
    borderTop: "1px solid #333",
    paddingTop: "15px",
    textAlign: "center",
    fontSize: "14px"
  }
};

export default Footer;
