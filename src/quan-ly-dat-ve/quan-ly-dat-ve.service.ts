import {  Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { errorCode, failCode, successCode } from 'src/config/response';
@Injectable()
export class QuanLyDatVeService {
prisma = new PrismaClient();
// dat ve
async datVe(userId,maLichChieu,maGhe,res){
    try {
    let checkUserbyId=await this.prisma.nguoiDung.findFirst({where:{tai_khoan:userId}});
    let checkListLichChieu = await this.prisma.datVe.findMany({where:{ma_lich_chieu:maLichChieu}}) 
    let  newData ={tai_khoan:userId,ma_lich_chieu:maLichChieu,ma_ghe:maGhe}
    let checkLichChieu= await this.prisma.datVe.findFirst({where:{ma_lich_chieu:maLichChieu}}) 
    let checkDatVe = await this.prisma.datVe.findMany() 
    let giaVe = await this.prisma.lichChieu.findFirst({where:{ma_lich_chieu:maLichChieu}})
    let dataShow = {maLichChieu,danhSachVe:{maGhe,giaVe:giaVe.gia_ve}}
    if(checkUserbyId ){
        if(checkLichChieu != null){
            for  (const lichChieu of checkListLichChieu){
        if(lichChieu.ma_ghe== maGhe){
            failCode(res,null,"ticket ordered")
        }
        }        
        let index = checkDatVe.findIndex(item=>item.ma_ghe==maGhe&&item.ma_lich_chieu==maLichChieu)
        if(index==-1){
          await this.prisma.datVe.create({data:newData})
          successCode(res,dataShow,"order success") 
        }else{
            failCode(res,null,"ticket ordered")
        }
    }else{
    await this.prisma.datVe.create({data:newData})
    successCode(res,dataShow,"order success") 
 }
    }else{  
        failCode(res,null,"user not exist")
    }
    } catch  {
       errorCode(res,"error BE")
    }
    };

// danh sach phong ve
async getListPhongVe(maLichChieu,res){
try {
    let data = await this.prisma.lichChieu.findFirst({include:{rapPhim:true},where:{ma_lich_chieu:maLichChieu}})
successCode(res,data,"get data success")
} catch  {
    errorCode(res,"error BE")
}
}
  // tao Lich Chieu
async taoLichChieu(lichChieu,res){
    try {
let checkIdPhim = await this.prisma.phim.findFirst({where:{ma_phim:lichChieu.maPhim}})
let checkIdRap= await this.prisma.rapPhim.findFirst({where:{ma_rap:lichChieu.maRap}})
let checkListLichChieu = await this.prisma.lichChieu.findMany();
let indexLichChieu = checkListLichChieu.findIndex(
    item=>item.ma_phim==lichChieu.maPhim 
    && item.ma_rap==lichChieu.maRap
    &&item.ngay_gio_chieu.getTime()==new Date(lichChieu.ngayGioChieu).getTime())

if(checkIdRap){
    if(checkIdPhim){
   if(indexLichChieu==-1){
    let newData={ma_phim:lichChieu.maPhim,
        ma_rap:lichChieu.maRap,
        ngay_gio_chieu:new Date(lichChieu.ngayGioChieu),
        gia_ve:lichChieu.giaVe
    }
    let data = await this.prisma.lichChieu.create({data:newData});
    successCode(res,data,"create data success")
   }else{
    failCode(res,null,"lich Chieu existed")
   }
    }else{
        failCode(res,null,"id movie not exist")
    }
}else{
    failCode(res,null,"id center movie not exist")
}

} catch(error)  {
    errorCode(res,"error BE")
}
}  
  
}