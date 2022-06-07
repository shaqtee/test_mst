import express from "express";
import MySQL from "../database/mysql.js";

// READ ALL
const router = express.Router();
router.get("/all", async (req, res) => {
  const quran = new MySQL();
  const [result] = await quran.query("SELECT * FROM bank_swifs");
  if (!result) return res.status(500).json({ message: "Error" });
  res.status(200).json(result);
});
// READ BY ID
router.get("/find/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const quran = new MySQL();
  const [...result] = await quran.findById(id);
  if (!result) return res.status(500).json({ message: "Error" });
  res.status(200).json(result);
});
// CREATE
router.post("/add", async (req, res) => {
  const { name, code } = req.body;
  const quran = new MySQL();
  const [id, status] = await quran.add(name, code);
  if (!status) return res.status(500).json({ message: "Error" });
  res.status(200).json({ id, status });
});
// CREATE
router.post("/add", async (req, res) => {
  const { name, code } = req.body;
  const quran = new MySQL();
  const [id, status] = await quran.add(name, code);
  if (!status) return res.status(500).json({ message: "Error" });
  res.status(200).json({ id, status });
});
//UPDATE
router.post("/update", async (req, res) => {
  const { name, id } = req.body;
  const quran = new MySQL();
  const [...result] = await quran.update(name, id);
  if (!result) return res.status(500).json({ message: "Error" });
  res.status(200).json({ result });
});
//DELETE
router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  const quran = new MySQL();
  await quran.delete(id);
  res.status(200).json({ success: "deleted" });
});

export default router;
