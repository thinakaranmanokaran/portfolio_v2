import React from "react";

const Project = () => {
  // Get basic device information
  const platform = navigator.platform || "Unknown";
  const userAgent = navigator.userAgent || "Unknown";
  const deviceMemory = navigator.deviceMemory || "Unknown";
  const hardwareConcurrency = navigator.hardwareConcurrency || "Unknown";
  const screenWidth = window.screen.width || "Unknown";
  const screenHeight = window.screen.height || "Unknown";
  const colorDepth = window.screen.colorDepth || "Unknown";

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Device Information</h1>
      <p>This page displays basic information about your device.</p>
      <div style={styles.infoBox}>
        <p>
          <strong>Platform:</strong> {platform}
        </p>
        <p>
          <strong>User-Agent:</strong> {userAgent}
        </p>
        <p>
          <strong>Device Memory:</strong> {deviceMemory} GB
        </p>
        <p>
          <strong>Number of CPU Cores:</strong> {hardwareConcurrency}
        </p>
        <p>
          <strong>Screen Resolution:</strong> {screenWidth} x {screenHeight}
        </p>
        <p>
          <strong>Color Depth:</strong> {colorDepth} bits
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    padding: "20px",
    lineHeight: "1.6",
  },
  title: {
    color: "#333",
  },
  infoBox: {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    padding: "10px",
    marginTop: "10px",
  },
};

export default Project;
