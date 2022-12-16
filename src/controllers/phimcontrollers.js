const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GetPhim= async(req,res ) =>{

    let data= await prisma.phim.findMany();

    res.send(data)
}

const Getphimid = async(req,res ) =>{

    let {id} = req.params;

  
    let data= await prisma.heThongRap.findFirst({
        where:{
            ma_phim: Number(id)
        }
    });

    res.send(data)
}


const Createphim = async (req, res) => {

    let {  ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,dang_gia,hot,dang_chieu,sap_chieu} = req.body;

    let data = {
        ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,dang_gia,hot,dang_chieu,sap_chieu
    }

  

    let createData = await prisma.phim.create({
        data
    });

    res.send(createData);
}


const Updatephim= async (req, res) => {

    let { id } = req.params;
    let { ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,dang_gia,hot,dang_chieu,sap_chieu} = req.body;

 
    let data = {
        ten_phim,trailer,hinh_anh,mo_ta,ngay_khoi_chieu,dang_gia,hot,dang_chieu,sap_chieu
    }



    let updateData = await prisma.phim.update({
        data,
        where: {
            ma_phim: Number(id)
        }
    });

    res.send(updateData);
}


const deletephim = async (req, res) => {
    let { id } = req.params;


    await prisma.heThongRap.delete({
        where: {
            ma_phim: Number(id)
        }
    })

    res.send("Xóa thành công");
}

module.exports={
    GetPhim,
    Getphimid,
    Createphim,
    Updatephim,
    deletephim
}