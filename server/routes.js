const express = require("express")

const router = express.Router()

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ msg: "get request to   ---/todos" })
  })
  .post((req, res) => {
    res.status(201).json({ msg: "post request to   ---/todos" })
  })

router
  .route("/:id")
  .delete((req, res) => {
    res.status(203).json({ msg: "delet request to   ---/todos/:id" })
  })
  .put((req, res) => {
    res.status(200).json({ msg: "put request to   ---/todo/ids" })
  })
module.exports = router
