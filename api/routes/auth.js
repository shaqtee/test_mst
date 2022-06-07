import express from "express";
import { register, login, findId, forgotPass } from "../controllers/auth.js";
import { sendMail } from "../controllers/mail.js";
import { activate } from "../controllers/mailactivate.js";
import { sendForgotPass } from "../controllers/mailforgot.js";

const router = express.Router();

router.post("/register", register, sendMail);
router.get("/activate/:token", activate);
router.get("/find/:id", findId);
router.post("/login", login);
router.post("/forgot/", forgotPass, sendForgotPass);

export default router;
