import React from "react";
import styles from "./style";

function Home() {
  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const githubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>AuthKit Demo</h2>
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.google }}
            onClick={googleLogin}
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
              style={styles.icon}
            />
            Login with Google
          </button>
          <button
            style={{ ...styles.button, ...styles.github }}
            onClick={githubLogin}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/16/ffffff/github.png"
              alt="Github"
              style={styles.icon}
            />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
