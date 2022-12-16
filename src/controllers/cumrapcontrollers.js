const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GetcumRap= async(req,res ) =>{

    let data= await prisma.cumRap.findMany({
        include:{
            ma_he_thong_rap:true
        }
    
    });

    res.send(data)
}

const GetcumRappid = async(req,res ) =>{

    let {id} = req.params;

    // let data= await prisma.heThongRap.findMany({
    //     where:{
    //         ma_he_thong_rap: Number(id)
    //     }
    // });

    let data= await prisma.cumRap.findFirst({
        include:{
            ma_he_thong_rap:true
        },
        where:{
            ma_cup_rap: Number(id)
        }
    });

    res.send(data)
}


const CreatecumRap= async (req, res) => {

    let {  ten_cum_rap,dia_chi,ma_he_thong_rap} = req.body;

    let data = {
        ten_cum_rap,dia_chi,ma_he_thong_rap
    }

  

    let createData = await prisma.cumRap.create({
        data
    });

    res.send(createData);
}


const UpdatecumRap = async (req, res) => {

    let { id } = req.params;
    let { ten_cum_rap,dia_chi,ma_he_thong_rap} = req.body;

 
    let data = {
        ten_cum_rap,dia_chi,ma_he_thong_rap
    }



    let updateData = await prisma.cumRap.update({
        data,
        where: {
            ma_cup_rap: Number(id)
        }
    });

    res.send(updateData);
}


const deletecumRap= async (req, res) => {
    let { id } = req.params;


    await prisma.cumRap.delete({
        where: {
            ma_cup_rap: Number(id)
        }
    })

    res.send("Xóa thành công");
}

module.exports={
    GetcumRap,
    GetcumRappid,
    CreatecumRap,
    UpdatecumRap,
    deletecumRap
}