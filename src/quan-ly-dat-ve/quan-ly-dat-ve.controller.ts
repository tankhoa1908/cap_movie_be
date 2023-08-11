import { Controller,Response, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuanLyDatVeService } from './quan-ly-dat-ve.service';
import { UseGuards, } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist';

@UseGuards(AuthGuard("jwt"))
@Controller('api/quanLyDatve')
export class QuanLyDatVeController {
  constructor(private readonly quanLyDatVeService: QuanLyDatVeService) {}

// dat ve
@Post("/datVe/:tai_khoan/:ma_lich_chieu/:ma_ghe")
datVe(@Param("tai_khoan") userId ,@Response() res,
@Param("ma_lich_chieu") maLichChieu ,
@Param("ma_ghe") maGhe ,
){
return this.quanLyDatVeService.datVe(Number(userId),Number(maLichChieu),Number(maGhe),res )
}

// danh sach phong ve
@Get("/LayDanhSachPhongVe/:ma_lich_chieu")
getListPhongVe(@Param("ma_lich_chieu") maLichChieu , 
@Response() res){

  return this.quanLyDatVeService.getListPhongVe(Number(maLichChieu),res)
}
// tao lich chieu
@Post("/TaoLichChieu")
taoLichChieu(@Body()  body , @Response() res){
  return this.quanLyDatVeService.taoLichChieu(body,res)
}




}
