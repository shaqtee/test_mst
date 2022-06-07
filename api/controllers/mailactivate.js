import MySQL from "../database/mysql.js";

export const activate = async (req, res, next) => {
  try {
    //res.json(req.params.token);
    const user = new MySQL();
    const [...userData] = await user.findByToken(req.params.token);
    if (!userData) return next(err);
    const [...userActivate] = await user.actived("active", userData[0].id);
    res.status(200).json("sip");
  } catch (error) {}
};
