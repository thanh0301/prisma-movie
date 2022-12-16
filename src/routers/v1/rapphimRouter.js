const express = require('express')
const rapphimcontrollers = require('../../controllers/rapphimcontrollers')

const rapphimRouter= express.Router();

rapphimRouter.get("/Gethethongrap",rapphimcontrollers.GetrapPhim)
rapphimRouter.get("/Gethethongrap/:id",rapphimcontrollers.GetrapPhimid)
rapphimRouter.post("/CreateHeThongRap",rapphimcontrollers.CreaterapPhim)
rapphimRouter.put("/UpdateHeThongRap/:id",rapphimcontrollers.UpdaterapPhim)
rapphimRouter.delete("/deleteHeThongRap/:id",rapphimcontrollers.deleterapPhim)

module.exports = rapphimRouter;