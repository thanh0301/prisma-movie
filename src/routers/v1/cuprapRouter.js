const express =require('express')

const cumrapcontrollers= require('../../controllers/cumrapcontrollers')

const cumrapRouter =express.Router();


cumrapRouter.get("/Getcumrap",cumrapcontrollers.CreatecumRap)
cumrapRouter.get("/Getcumrap/:id",cumrapcontrollers.GetcumRappid)
cumrapRouter.post("/Createcumrap",cumrapcontrollers.CreatecumRap)
cumrapRouter.put("/Updatecumrap/:id",cumrapcontrollers.UpdatecumRap)
cumrapRouter.delete("/deletecumrap/:id",cumrapcontrollers.deletecumRap)

module.exports = cumrapRouter;