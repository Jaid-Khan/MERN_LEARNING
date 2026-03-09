import styles from "./DashboardPage.module.css";
import Button from "../components/Button";
import { useState } from "react";

function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");

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
