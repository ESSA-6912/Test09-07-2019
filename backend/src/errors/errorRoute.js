const express = require("express")

module.exports = (err, req, res, next) => {
    res.json({
        error:err.message || "Internal Server Error"
    })
}

