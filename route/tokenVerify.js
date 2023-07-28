import jwt from "jsonwebtoken";
export const verifyToken = (req, res) => {
  const authhead = req.header.token;
  if (authhead) {
    const token = authhead.split(" ")[1];
    jwt.verify(token, process.env.JWT_PASS, (err, user) => {
      if (err) {
        res.status(404).json("Token invalid");
      }
      req.user = user;
    });
  } else {
    return res.status(400).json("You are not authenticated");
  }
};

export const verifyAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(400).json("you are not allowed to that");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(400).json("you are not to do.. ");
    }
  });
};
