import { Controller, Get, Post, Body,Put, Patch, Param,Request, Delete,Response, Query } from '@nestjs/common';
import { QuayLyNguoiDungService } from './quay-ly-nguoi-dung.service';
import { UseGuards } from '@nestjs/common/decorators/core';
import { AuthGuard } from '@nestjs/passport';
@Controller('api/quanLyNguoiDung')
export class QuayLyNguoiDungController {
  constructor(private readonly quayLyNguoiDungService: QuayLyNguoiDungService) {}

// Lay Danh Sach Loai Nguoi Dung
@UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachLoaiNguoiDung")
getListLoaiND(@Response() res){

return this.quayLyNguoiDungService.getListLoaiND(res); 
}

// Dang Ky
@Post("/DangKy") 
dangKy(@Body() body , @Response() res){
return this.quayLyNguoiDungService.dangKy(body,res)
}
// Dang Nhap
@Post("/dangNhap")
dangNhap(@Body() body ,@Response() res){
  return this.quayLyNguoiDungService.dangNhap(body,res)
}
// LayDanhSachNguoiDung
@UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachNguoiDung")
getListND(@Response() res){
return this.quayLyNguoiDungService.getListLoaiND(res)
}
// LayDanhSachNguoiDungPhanTrang
@UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachNguoiDungPhanTrang/:page/:page_size")
getUserPhanTrang(@Response() res,
@Param("page") page , @Param("page_size") pageSize
){
return this.quayLyNguoiDungService.getUserPhanTrang(page,pageSize,res)
}
// TimKiemNguoiDung
@UseGuards(AuthGuard("jwt"))
@Get("/TimKiemNguoiDung/:query")
SearchNguoiDung(@Response() res,@Param("query") query){

return this.quayLyNguoiDungService.searchNguoiDung(res,query)
}
// TimKiemNguoiDungPhanTrang
@UseGuards(AuthGuard("jwt"))
@Get("/TimKiemNguoiDungPhanTrang/:page/:page_size/:query")
SearchUserPhanTrang(@Response() res
, @Param("page") page,
@Param("page_size") pageSize ,@Param("query") query){
return this.quayLyNguoiDungService.searchUserPhanTrang(res,page,pageSize,query)
}

// ThongTinTaiKhoan
@UseGuards(AuthGuard("jwt"))
@Get("/ThongTinTaiKhoan")
ThongTinTaiKhoan(@Response() res){
return this.quayLyNguoiDungService.thongTinTaiKhoan(res)
}
// LayThongTinNguoiDung
@UseGuards(AuthGuard("jwt"))
@Get("/LayThongTinNguoiDung/:user_id")
LayThongTinNguoiDung(@Response() res,@Param("user_id" ) userId){
  return this.quayLyNguoiDungService.layThongTinNguoiDung(res,Number(userId))
}
// ThemNguoiDung
@UseGuards(AuthGuard("jwt"))
@Post("/ThemNguoiDung")
ThemNguoiDung(@Response() res,@Body() body){
return this.quayLyNguoiDungService.themNguoiDung(res,body)
}
// CapNhatThongTinNguoiDung
@UseGuards(AuthGuard("jwt"))
@Put("/CapNhatThongTinNGuoiDung/:user_id")
CapNhatThongTinNguoiDung(@Response() res,
@Param("user_id") userId,@Body() body
){
return this.quayLyNguoiDungService.capNhatThongTinNguoiDung(res,Number(userId),body)
}
// CapNhatThongTinNguoiDung-Admin
@UseGuards(AuthGuard("jwt"))
@Post("/CapNhatThongTinNguoiDung/Admin/:user_id")
CapNhatThongTinNguoiDungAd(@Response() res, @Body() body,@Param("user_id") userId){
return this.quayLyNguoiDungService.capNhatThongTinNguoiDungAdmin(res,body,Number(userId))
}

//XoaNguoiDung
@UseGuards(AuthGuard("jwt"))
@Delete("/XoaNguoiDung/:user_id")
XoaNGuoiDung(@Response() res , @Param("user_id") userId){
return this.quayLyNguoiDungService.xoaNguoiDung(res,Number(userId))
} 

}


