import express from "express";
import uploadVerify from "../models/Upload.js";
import { upload, getFile } from "../controllers/upload.js";
import fs from "fs";
const router = express.Router();

router.post("/", uploadVerify, upload);
router.post("/getfile", getFile);
router.get("/download/:id", (req, res) => {
  //  res.sendFile(
  //    `/users/shaqtee/desktop/NJS/mern_scafolding/api/public/upload/${req.body.file}`
  //  );
  res.download(`./public/upload/${req.params.id}`);
});

export default router;
