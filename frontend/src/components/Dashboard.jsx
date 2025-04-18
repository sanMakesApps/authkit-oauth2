import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./style";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user-info", {
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Dashboard</h2>
        {userInfo ? (
          <div style={styles.infoSection}>
            <h4 style={styles.subTitle}>User Information</h4>
            {userInfo.picture && (
              <img src={userInfo.picture} alt="profile" style={styles.avatar} />
            )}
            <div style={styles.infoText}>
              <strong>Name:</strong> {userInfo.name}
            </div>
            <div style={styles.infoText}>
              <strong>Email:</strong> {userInfo.email}
            </div>
          </div>
        ) : (
          <span style={styles.loading}>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
