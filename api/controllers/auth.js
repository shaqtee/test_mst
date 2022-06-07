import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import MySQL from "../database/mysql.js";
import { sendMail } from "../controllers/mail.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const token = bcrypt.hashSync(req.body.username, salt);
    const { username, email, photo } = req.body;
    const user = new MySQL();
    const checkUniqueEmail = await user.findByEmail(email);
    if (checkUniqueEmail.length > 0) return next(err);
    req.body.token = token;
    console.log("reslocalToken :" + req.body.token);
    await user.add(username, hash, email, token, photo);
    next();
    //res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const userCek = new MySQL();
    const [...user] = await userCek.findByEmail(req.body.email);
    if (!user) return next(createError(404, "User not found"));
    //const user = await User.findOne({ username: req.body.username });
    //console.log(req.body.password);
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));

    const token = jwt.sign(
      { id: user[0].email, isAdmin: user[0].role },
      process.env.JWT
    );

    const { password, ...otherDetails } = user[0];

    res
      .cookie("alfa_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

export const findId = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const user = new MySQL();
    const [...userId] = await user.findById(req.params.id);
    res.status(200).json(userId);
  } catch (error) {}
};

export const forgotPass = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const token = bcrypt.hashSync(req.body.email, salt);
    const { email } = req.body;
    const user = new MySQL();
    const [...userEmail] = await user.findByEmail(req.body.email);
    if (!userEmail[0].email) return next(err);
    await user.updatePassword(hash, token, email);
    console.log(hash, token, email);
    req.body.token = token;
    next();
  } catch (err) {
    next(err);
  }
};
