const express = require("express")
const { STUDENTS, Student } = require("../models/students");

module.exports = express.Router()
    .get("/:id", (req, res) => {
        const id = req.params.id
        student = STUDENTS.find(student => student.enrollementNumber === id)

        if (typeof student === "undefined") {
            return res.status(404).send();
        }

        res.json(student);
    })
    .get("/", (req, res) => {
        res.json(STUDENTS)
    })

    .post("/", (req, res) => {
        new Student(req.body)
            .save();

        res.json(req.body)
    })

