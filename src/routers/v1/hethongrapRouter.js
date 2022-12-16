const express = require('express')
const hethongtapcontrollers= require('../../controllers/hethongtapcontrollers')

const hethongrapRouter= express.Router();

const multer =require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,process.cwd() + "/public/img");
    },
    filename:(req,file,cb) =>{

        const fileNewname =Date.now() + '-' + file.originalname;
        cb(null,fileNewname)
    }
})


const upload = multer({storage })

hethongrapRouter.post("/uploab/:id", upload.single("image"),hethongtapcontrollers.uploadRestaurant)
hethongrapRouter.get("/Gethethongrap",hethongtapcontrollers.GetHeThongRap)
hethongrapRouter.get("/Gethethongrap/:id",hethongtapcontrollers.GetHeThongRapid)
hethongrapRouter.post("/CreateHeThongRap",hethongtapcontrollers.CreateHeThongRap)
hethongrapRouter.put("/UpdateHeThongRap/:id",hethongtapcontrollers.UpdateHeThongRap)
hethongrapRouter.delete("/deleteHeThongRap/:id",hethongtapcontrollers.deleteHeThongRap)

module.exports = hethongrapRouter;