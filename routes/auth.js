const express = require("express")
const passport = require('passport')
const router = express.Router()
const User = require("../models/User")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user)
    })
  })(req, res, next)
})

router.get("/signup", (req, res, next) => {
  res.render("auth/signup")
})

router.post("/signup", async (req, res, next) => {
  const {username, password} = req.body
  if (username === "" || password === "") {
    return res.status(401).json({message: "Indicate username and password"})
  }
  const user = await User.findOne({username})
    if (user !== null) {
      return res.status(401).json({message: "The username already exists"})
    } else {
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)
      const newUser = new User({username, password: hashPass})
      try{
        const userSaved = await newUser.save()
        res.status(200).json(userSaved)
      }
      catch(err)  {
        res.status(401).json({message: "Something went wrong"})
      }
    }
})

router.get("/logout", (req, res) => {
  req.logout()
  res.status(200).json({message: 'You are out!'})
})


router.get('/loggedin', (req, res, next) => {
  return (req.isAuthenticated())    ?
    res.status(200).json(req.user)  :
    res.status(403).json({ message: 'Unauthorized' })
})

module.exports = router
