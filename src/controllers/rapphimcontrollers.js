const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GetrapPhim= async(req,res ) =>{

    let data= await prisma.rapPhim.findMany({
        include:{
            ma_cup_rap:true
        }
    
    });

    res.send(data)
}

const GetrapPhimid = async(req,res ) =>{

    let {id} = req.params;

   
    let data= await prisma.rapPhim.findFirst({
        include:{
            ma_cup_rap:true
        },
        where:{
            ma_rap_phim: Number(id)
        }
    });

    res.send(data)
}


const CreaterapPhim= async (req, res) => {

    let { ten_rap,ma_cup_rap} = req.body;

    let data = {
        ten_rap,ma_cup_rap
    }

  

    let createData = await prisma.rapPhim.create({
        data
    });

    res.send(createData);
}


const UpdaterapPhim = async (req, res) => {

    let { id } = req.params;
    let { ten_rap,ma_cup_rap} = req.body;

 
    let data = {
        ten_rap,ma_cup_rap
    }



    let updateData = await prisma.rapPhim.update({
        data,
        where: {
            ma_rap_phim: Number(id)
        }
    });

    res.send(updateData);
}


const deleterapPhim= async (req, res) => {
    let { id } = req.params;


    await prisma.rapPhim.delete({
        where: {
            ma_rap_phim: Number(id)
        }
    })

    res.send("Xóa thành công");
}

module.exports={
    GetrapPhim,
    GetrapPhimid,
    CreaterapPhim,
    UpdaterapPhim,
    deleterapPhim
}
