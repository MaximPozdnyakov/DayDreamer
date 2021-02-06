const jwt = require("jsonwebtoken");

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    const token = req.cookies.ganttToken;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = jwt.verify(token, "jwtSecret");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    return res.status(200).json({ message: "ok", user });
  } catch (e) {
    return res.status(500).json({ message: "Ошибка базы данных" });
  }
};
