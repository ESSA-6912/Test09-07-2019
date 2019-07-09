const express = require("express")
const studentRouter = require("./apis/students");
const errorHandlerRouter = require("./errors/errorRoute");
const bodyParser = require('body-parser')

express()

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/api/login", (req, res, next) => {
        const { username, password } = req.body;
        if (username === "admin" && password === "admin") {
            return res.json({
                success: true,
                username,
            })
        }
        res.status(401).json({ error: "Wrong username or password" })
    })
    .use("/api/students", studentRouter)
    .get("/api", (req, res) => {
        res.json({ ok: true })
    })
    .use(errorHandlerRouter)
    .listen(8080)
