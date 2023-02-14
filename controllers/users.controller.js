const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  async signUp(req, res) {
    try {
      console.log(req.body);
      const { fullname, login, password, jobTitle, department } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      await User.create({
        fullname,
        login,
        password,
        jobTitle,
        department,
        password: hash,
      });
      return res.json("Пользователь успешно зарегистрирован");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  async signIn(req, res) {
    const { login, password } = req.body;
    const condidate = await User.findOne({ login });
    if (!condidate) {
      return res
        .status(401)
        .json({ error: "Ошибка авторизации. Пользователь не найден." });
    }
    const valid = await bcrypt.compare(password, condidate.password);
    if (!valid) {
      return res
        .status(401)
        .json({ error: "Ошибка авторизации. Пользователь не найден." });
    }
    try {
      const payload = {
        id: condidate.id,
      };
      const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {});
      res.json({
        token,
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
