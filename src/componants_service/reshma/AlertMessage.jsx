import React from "react";
import { useNavigate } from "react-router";
export default function AlertMessage() {
  const navigate = useNavigate();
  return (
    <div style={styles.container} className="md:text-xl lg:text-2xl">
      {/* Success Icon */}
      <div style={styles.iconWrapper}>
        <div style={styles.glow}></div>
        <div style={styles.circle}>✓</div>
      </div>

      {/* Text */}
      <div style={styles.successText}>Service Registration Successful</div>


      <a href="https://mail.google.com/mail/u/0/" style={styles.linkText} target="_blank">Go to email</a>

      <a onClick={() => navigate("/page11")} style={styles.backText}>Back to Home</a>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#3e3f47",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    md: "text-xl",
    lg: "text-2xl",
  },

  iconWrapper: {
    position: "relative",
    marginBottom: "20px",
  },

  glow: {
    position: "absolute",
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#2dd4bf",
    opacity: "0.25",
    top: "-10px",
    left: "-10px",
  },

  circle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#2dd4bf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    color: "#ffffff",
    fontWeight: "bold",
    zIndex: 1,
  },

  successText: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "14px",
  },

  linkText: {
    fontSize: "13px",
    color: "#b5f3e4",
    marginBottom: "10px",
    cursor: "pointer",
  },

  backText: {
    fontSize: "13px",
    color: "#ffffff",
    opacity: "0.8",
    cursor: "pointer",
  },
};
