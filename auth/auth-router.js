//router module
const router = require("express").Router();
//cryptography module
const bcrypt = require("bcryptjs");
//token module
const jwt = require("jsonwebtoken");
//super secret currying with JWT
const secret = require("../api/secrets").jwtSecret;
//helper function
const Users = require("../users/users-model.js");

//CRUD Auth
//POST REGISTER
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//POST LOGIN
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//CREATE TOKEN for LOGIN
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "2d"
  };

  return jwt.sign(payload, secret, options);
}
//export
module.exports = router;
