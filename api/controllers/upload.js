import fs from "fs";
import MySQL from "../database/mysql.js";

export const upload = async (req, res) => {
  let imageURL =
    req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;

  let [username, , email] = req.body.data.split(",");

  const user = new MySQL();

  //cek dalam database
  const [{ photo, ...userId }] = await user.findByEmail(email);

  //cek ketersediaan file
  fs.readdir("./public/upload/", async (err, files) => {
    const [...available] = files;
    const [...found] = available.filter((file) => file === photo);

    if (found.length == 0) {
      await user.updatePhoto(req.file.filename, email);
      res.status(200).json({ imageURL });
    } else {
      const filePath = `public/upload/${found[0]}`;
      fs.unlinkSync(filePath);
      await user.updatePhoto(req.file.filename, email);

      console.log(email, req.file);
      res.status(200).json({ imageURL });
    }
  });
};

export const getFile = (req, res) => {
  fs.readdir("./public/upload/", (err, files) => {
    res.json({ files });
  });
};
