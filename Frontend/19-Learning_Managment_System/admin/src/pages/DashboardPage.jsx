import styles from "./DashboardPage.module.css";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DashboardPage() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const navigate = useNavigate();

  useEffect(() => {
  axios.post(
    "http://localhost:3000/admin/auth/check-session",
    {},
    { withCredentials: true }
  )
  .then((res) => {
    if (res.data.res === false) {
      navigate("/login");
    }
  })
  .catch((err) => {
    console.log(err);
  });
}, []);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>Admin Panel</h2>

        <Button
          name="Dashboard"
          section="Dashboard"
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        <Button
          name="Teachers"
          section="Teachers"
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        <Button
          name="Students"
          section="Students"
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
        <Button
          name="Batches"
          section="Batches"
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {activeSection == "Dashboard" ? (
          <h1>Dashboard Section</h1>
        ) : activeSection == "Teachers" ? (
          <h1>Teachers Section</h1>
        ) : activeSection == "Students" ? (
          <h1>Students Section</h1>
        ) : activeSection == "Batches" ? (
          <h1>Batches Section</h1>
        ) : null}
      </div>
    </div>
  );
}

export default DashboardPage;
