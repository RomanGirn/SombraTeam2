import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/roman-photo.jpg"} alt="Roman Girny" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Roman Girny</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
        <div style={styles.card}>
        <img src={"/mariana-photo.jpg"} alt="Nariana Madorozhniak" style={styles.photo} />

        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariana Nadorozhniak</h2>
          <p style={styles.position}>UA/UX DESIGNER</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/sasha-photo.jpg"} alt="Olexandr Skrypnychuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Olexandr Skrypnychuk</h2>
          <p style={styles.position}>Software Developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/sofiia-photo.jpg"} alt="Sofiia Kotiuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Sofiia Kotiuk</h2>
          <p style={styles.position}>BUSINESS ANALYST</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/ivan-photo.jpg"} alt="Ivan Lykov" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Ivan Lykov</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#d81e1eff",
    boxShadow: "0 4px 8px rgba(245, 10, 10, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
