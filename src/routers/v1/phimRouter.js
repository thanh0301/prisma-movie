const express = require('express')
const phimcontrollers= require('../../controllers/phimcontrollers')

const phimRouter= express.Router();



phimRouter.get("/Gethethongrap",phimcontrollers.GetPhim)
phimRouter.get("/Gethethongrap/:id",phimcontrollers.Getphimid)
phimRouter.post("/CreateHeThongRap",phimcontrollers.Createphim)
phimRouter.put("/UpdateHeThongRap/:id",phimcontrollers.Updatephim)
phimRouter.delete("/deleteHeThongRap/:id",phimcontrollers.deletephim)

module.exports = phimRouter;