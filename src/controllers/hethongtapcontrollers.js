const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const {successCode,errorCode,faiCode} =require('../ulti/responser')
const GetHeThongRap= async(req,res ) =>{

    let data= await prisma.heThongRap.findMany();

    successCode(res,data)
}

const GetHeThongRapid = async(req,res ) =>{

   try{
    let {id} = req.params;

    let data= await prisma.heThongRap.findFirst({
        where:{
            ma_he_thong_rap: Number(id)
        }
    });

    if(data)
            successCode(res,data)
    else
            errorCode(res,"Không tồn tại");
   }
   catch{
            faiCode(res)
   }
}


const CreateHeThongRap = async (req, res) => {

    try{
        let {  ten_he_thong_rap,logo} = req.body;

        let data = {
            ten_he_thong_rap,logo
        }
    
      
    
        let createData = await prisma.heThongRap.create({
            data
        });
    
        if(createData)
                successCode(res,data)
        else
                errorCode(res,"Thất bại");
       }
       catch{

                faiCode(res)
       }
       
}


const UpdateHeThongRap = async (req, res) => {

    let { id } = req.params;
    let { ten_he_thong_rap,logo} = req.body;

 
    let data = {
        ten_he_thong_rap,logo
    }



    let updateData = await prisma.heThongRap.update({
        data,
        where: {
            ma_he_thong_rap: Number(id)
        }
    });

    res.send(updateData);
}


const deleteHeThongRap = async (req, res) => {



    let { id } = req.params;


   let checkRes =  await prisma.heThongRap.delete({
        where: {
            ma_he_thong_rap: Number(id)
        }
    })

    if (checkRes){
        successCode(res,"Xóa thành công");
    }
    else{
        errorCode(res,"Không tìm thấy dữ liệu");
    }
}

    const uploadRestaurant = async (req,res) =>{
        const { filename } = req.file;
        const { id } = req.params;
    
        let getData = await prisma.heThongRap.findFirst(id);
    
        let object = { ...getData, logo: `/public/img/${filename}` };
        await prisma.heThongRap.update(object,
            {
                where: {
                    ma_he_thong_rap: id
                }

            });
        successCode(res, filename);
    }
    
module.exports={
    GetHeThongRap,
    GetHeThongRapid,
    CreateHeThongRap,
    UpdateHeThongRap,
    deleteHeThongRap,
    uploadRestaurant  
}