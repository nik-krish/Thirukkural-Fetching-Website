import React, { useState } from "react";
import "../styles/KuralDisplay.css";

function KuralDisplay({ kuralData }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTamilExplanation, setShowTamilExplanation] = useState(false);
  const [showMeaningKey, setShowMeaningKey] = useState(false);
  const [showCouplet, setShowCouplet] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);

  if (!kuralData) {
    return null;
  }

  return (
    <div className="kural-display">
      <h2 className="kural-number">திருக்குறள் {kuralData.Number}</h2>
      <p className="kural-line">{kuralData.Line1}</p>
      <p className="kural-line">{kuralData.Line2}</p>

      <div className="buttons-container">
        <button onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? "Hide" : "Show"} Translation
        </button>
        <button onClick={() => setShowTamilExplanation(!showTamilExplanation)}>
          {showTamilExplanation ? "Hide" : "Show"} Tamil Explanation
        </button>
        <button onClick={() => setShowMeaningKey(!showMeaningKey)}>
          {showMeaningKey ? "Hide" : "Show"} Meaning Key
        </button>
        <button onClick={() => setShowCouplet(!showCouplet)}>
          {showCouplet ? "Hide" : "Show"} Couplet
        </button>
        <button onClick={() => setShowTransliteration(!showTransliteration)}>
          {showTransliteration ? "Hide" : "Show"} Transliteration
        </button>
      </div>

      {showTranslation && (
        <div className="section">
          <h4>Translation</h4>
          <p>{kuralData.Translation}</p>
        </div>
      )}
      {showTamilExplanation && (
        <div className="section">
          <h4>Tamil Explanation</h4>
          <p>{kuralData.mv}</p>
          <p>{kuralData.sp}</p>
        </div>
      )}
      {showMeaningKey && (
        <div className="section">
          <h4>Meaning Key</h4>
          <p>{kuralData.mk}</p>
        </div>
      )}
      {showCouplet && (
        <div className="section">
          <h4>Couplet</h4>
          <p>{kuralData.couplet}</p>
        </div>
      )}
      {showTransliteration && (
        <div className="section">
          <h4>Transliteration</h4>
          <p>{kuralData.transliteration1}</p>
          <p>{kuralData.transliteration2}</p>
        </div>
      )}
    </div>
  );
}

export default KuralDisplay;
