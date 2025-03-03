import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import KuralForm from "./components/KuralForm";
import KuralDisplay from "./components/KuralDisplay";
import "./App.css";

function App() {
  const [kuralNo, setKuralNo] = useState("");
  const [kuralData, setKuralData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/kural/${kuralNo}`
      );

      if (!response.ok) {
        throw new Error("Error fetching the Kural data.");
      }

      const data = await response.json();
      setKuralData(data.kural[0]);
      setError("");
    } catch (err) {
      setError("Error fetching the Kural data.");
      setKuralData(null);
    }
  };

  return (
    <div className="App">
      <Header />
      <KuralForm
        kuralNo={kuralNo}
        setKuralNo={setKuralNo}
        handleSubmit={handleSubmit}
      />
      {error && <div className="error">{error}</div>}
      <KuralDisplay kuralData={kuralData} />
      <Footer />
    </div>
  );
}

export default App;
