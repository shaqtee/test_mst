import fs from "fs";
import MySQL from "../database/mysql.js";

export const upload = async (req, res) => {
  let imageURL =
    req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;

  console.log(req.file.path);
  let [username, , email] = req.body.data.split(",");
  const user = new MySQL();
  await user.updatePhoto(req.file.filename, email);

  //console.log(email, req.file);
  res.status(200).json({ imageURL });
};

export const getFile = (req, res) => {
  fs.readdir("./public/upload/", (err, files) => {
    res.json({ files });
  });
};
