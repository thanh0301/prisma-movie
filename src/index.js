const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static("."));


app.listen(8080);

const rootRouter =require('./routers/index')

app.use("/api",rootRouter);


//import thư viện xử lý dữ liệu data


// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();


// app.get("/GetHeThongRap", async(req,res ) =>{

//     let data= await prisma.heThongRap.findMany();

//     res.send(data)
// })

// app.get("/GetHeThongRap/:id", async(req,res ) =>{

//     let {id} = req.params;

//     // let data= await prisma.heThongRap.findMany({
//     //     where:{
//     //         ma_he_thong_rap: Number(id)
//     //     }
//     // });

//     let data= await prisma.heThongRap.findFirst({
//         where:{
//             ma_he_thong_rap: Number(id)
//         }
//     });

//     res.send(data)
// })


// app.post("/CreateHeThongRap", async (req, res) => {

//     let {  ten_he_thong_rap,logo} = req.body;

//     let data = {
//         ten_he_thong_rap,logo
//     }

  

//     let createData = await prisma.heThongRap.create({
//         data
//     });

//     res.send(createData);
// })


// app.put("/UpdateHeThongRap/:id", async (req, res) => {

//     let { id } = req.params;
//     let { ten_he_thong_rap,logo} = req.body;

 
//     let data = {
//         ten_he_thong_rap,logo
//     }



//     let updateData = await prisma.heThongRap.update({
//         data,
//         where: {
//             ma_he_thong_rap: Number(id)
//         }
//     });

//     res.send(updateData);
// })


// app.delete("/deleteHeThongRap/:id", async (req, res) => {
//     let { id } = req.params;


//     await prisma.heThongRap.delete({
//         where: {
//             ma_he_thong_rap: Number(id)
//         }
//     })

//     res.send("Xóa thành công");
// })



