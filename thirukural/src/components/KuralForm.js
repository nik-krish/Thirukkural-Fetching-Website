import React from "react";
import "../styles/KuralForm.css";

const KuralForm = ({ kuralNo, setKuralNo, handleSubmit }) => {
  return (
    <form className="kuralForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Kural No/Kural"
        className="kuralInput"
        value={kuralNo}
        onChange={(e) => setKuralNo(e.target.value)}
      />
      <button type="submit" className="kuralButton">
        Search
      </button>
    </form>
  );
};

export default KuralForm;
