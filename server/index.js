const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/thirukkural", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model according to your structure
const KuralSchema = new mongoose.Schema({
  Number: { type: Number, required: true },
  Line1: { type: String, required: true },
  Line2: { type: String, required: true },
  Translation: { type: String, required: true },
  mv: { type: String, required: true },
  sp: { type: String, required: true },
  mk: { type: String, required: true },
  explanation: { type: String, required: true },
  couplet: { type: String, required: true },
  transliteration1: { type: String, required: true },
  transliteration2: { type: String, required: true },
});

const Kural = mongoose.model("Kural", KuralSchema);

app.get("/api/kural/:number", async (req, res) => {
  const kuralNumber = parseInt(req.params.number);
  //console.log("Searching for Kural number:", kuralNumber);
  try {
    const kural = await Kural.findOne({ Number: kuralNumber });
    //console.log("Kural found:", kural);
    if (kural) {
      res.status(200).json({ kural: [kural] });
    } else {
      res.status(404).json({ message: "Kural not found" });
    }
  } catch (error) {
    console.error("Error fetching Kural data:", error);
    res.status(500).json({ message: "Error fetching Kural data" });
  }
});

/*
app.get("/api/kurals", async (req, res) => {
  try {
    const kurals = await Kural.find();
    res.status(200).json({ kurals });
  } catch (error) {
    res.status(500).json({ message: "Error fetching Kural data" });
  }
});
*/

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
