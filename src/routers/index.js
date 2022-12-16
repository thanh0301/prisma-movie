const express = require('express');
const rootRouter=express.Router();

const hethongrapRouter =require('./v1/hethongrapRouter')
const cumrapRouter =require('./v1/cuprapRouter')
const rapphimRouter =require('./v1/rapphimRouter')
const phim = require("./v1/phimRouter")
rootRouter.use("/phim/v1",phim)
rootRouter.use("/rapphim/v1",rapphimRouter)
rootRouter.use("/cumrap/v1",cumrapRouter)
rootRouter.use("/hethongrap/v1",hethongrapRouter)


module.exports=rootRouter;


