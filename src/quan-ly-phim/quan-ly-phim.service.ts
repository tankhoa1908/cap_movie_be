import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { errorCode, failCode, successCode } from 'src/config/response';


@Injectable()
export class QuanLyPhimService {
 prisma = new PrismaClient();
// LayDanhSachBanner
async layDanhSachBanner(res){
  try {
    let data = await this.prisma.banner.findMany();
successCode(res,data,"get data success")
  } catch  {
    errorCode(res,"error BE")
  }
}
// LayDanhSachPhim
async layDanhSachPhim(res){
  try {
    let data = await this.prisma.phim.findMany();
    successCode(res,data,"get data success");
  } catch  {
    errorCode(res,"error BE")
  }
}
// LayDanhSachPhimPhanTrang
async layDanhSachPhimPhanTrang(res,page,page_size){
  try {
    let index = (page-1)*page_size;
    let data = await this.prisma.phim.findMany({skip:index,take:page_size})
    successCode(res,data,"get data success")
  } catch(e)  {
  errorCode(res,"error BE")
  }
}
// LayDanhSachPhimTheoNgay
async  layDanhSachPhimTheoNgay(res,body,page,page_size){
  try {
    let index = (page-1)*page_size;
    let checkDate = await this.prisma.phim.findMany({where:{ngay_khoi_chieu:{lte:new Date(body.denNgay) ,gte:new Date(body.tuNgay)} },skip:index,take:page_size})
    if(checkDate){
      successCode(res,checkDate,"get data success")
    }else{
      failCode(res,null,"date of movie not exist")
    }
  } catch  {
    errorCode(res,"error BE")
  }
}
// themPhimUploadHinh
async themPhimUploadHinh(res,body,file){
  try {

let hot = !(['false', '0', '', 'undefined'].indexOf(String(body.hot).toLowerCase().trim()) + 1);
let dangChieu = !(['false', '0', '', 'undefined'].indexOf(String(body.dangChieu).toLowerCase().trim()) + 1);
let sapChieu = !(['false', '0', '', 'undefined'].indexOf(String(body.sapChieu).toLowerCase().trim()) + 1);
let newData={
   ten_phim:body.tenPhim,
   trailer:body.trailer,
   hinh_anh:file.filename,
   mo_ta:body.moTa,
   ngay_khoi_chieu:new Date(body.ngayKhoiChieu),
   danh_gia:Number(body.danhGia),
   hot:Boolean(hot),
   dang_chieu:Boolean(dangChieu),
   sap_chieu:Boolean(sapChieu)
    }
    let data = await this.prisma.phim.create({data:newData})
    successCode(res,data,"create data success")
  } catch  {
    errorCode(res,"error BE")
  }
}
//  CapNhatPhimUpload
async  capNhatPhimUpload(res,file,maPhim,body){
  try {
    let hot = !(['false', '0', '', 'undefined'].indexOf(String(body.hot).toLowerCase().trim()) + 1);
let dangChieu = !(['false', '0', '', 'undefined'].indexOf(String(body.dangChieu).toLowerCase().trim()) + 1);
let sapChieu = !(['false', '0', '', 'undefined'].indexOf(String(body.sapChieu).toLowerCase().trim()) + 1);
   let checkMaPhim = await this.prisma.phim.findFirst({where:{ma_phim:maPhim}}) ;
   let newData={
    ten_phim:body.tenPhim,
    trailer:body.trailer,
    hinh_anh:file.filename,
    mo_ta:body.moTa,
    ngay_khoi_chieu:new Date(body.ngayKhoiChieu),
    danh_gia:Number(body.danhGia),
    hot:Boolean(hot),
    dang_chieu:Boolean(dangChieu),
    sap_chieu:Boolean(sapChieu)
     }
   if(checkMaPhim){
  let data = await this.prisma.phim.update({data:newData,where:{ma_phim:maPhim}});
  successCode(res,data,"update movie success")
   }else{
    failCode(res,null,"movie not exist")
   }
  } catch (e) {
    errorCode(res,e.message)
  }
}
// XoaPhim
async xoaPhim(res,maPhim){
try {
  let checkMaPhim = await this.prisma.phim.findFirst({where:{ma_phim:maPhim}});
  let checkIdBanner = await this.prisma.banner.findFirst({where:{ma_phim:maPhim}});
  let checkIdLichChieu = await this.prisma.lichChieu.findFirst({where:{ma_phim:maPhim}});
if(checkMaPhim){
  if(checkIdBanner==null){
if(checkIdLichChieu==null){
  await this.prisma.phim.delete({where:{ma_phim:maPhim}})
successCode(res,"","delete movie success")
}else{
  failCode(res,null,"movie had movie showtimes")
}
  }else{
    failCode(res,null,"movie had on banner ")
  }

}else{
  failCode(res,null,"movie not exist")
}
} catch  {
  errorCode(res,"error BE")
}


}


}
