import { Controller,Response, Get, Post,Put, Body, Patch, Param, Delete ,UploadedFile,UseInterceptors} from '@nestjs/common';
import { QuanLyPhimService } from './quan-ly-phim.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('api/QuanLyPhim')
export class QuanLyPhimController {
  constructor(private readonly quanLyPhimService: QuanLyPhimService) {}
  // LayDanhSachBanner
  @UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachBanner")
layDanhSachBanner(@Response() res){
return this.quanLyPhimService.layDanhSachBanner(res)
}
// LayDanhSachPhim
@UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachPhim")
layDanhSachPhim(@Response() res){
  return this.quanLyPhimService.layDanhSachPhim(res)
}
//  LayDanhSachPhimPhanTrang
@UseGuards(AuthGuard("jwt"))
@Get("/layDanhSachPhimPhanTrang/:page/:page_size")
layDanhSachPhimPhanTrang(@Response() res,@Param("page") page,@Param("page_size") pageSize){
return this.quanLyPhimService.layDanhSachPhimPhanTrang(res,Number(page),Number(pageSize))
}
// LayDanhSachPhimTheoNgay
@UseGuards(AuthGuard("jwt"))
@Get("/LayDanhSachPhimTheoNgay/:page/:page_size")
LayDanhSanhPhimTheoNgay(@Response() res,@Body() body,@Param("page") page,@Param("page_size") pageSize){
return this.quanLyPhimService.layDanhSachPhimTheoNgay(res,body,Number(page),Number(pageSize)) 
}

// ThemPhimUploadHinh
@UseGuards(AuthGuard("jwt"))
@UseInterceptors(FileInterceptor("file",{
 storage:diskStorage({
  destination:process.cwd() +   "/public/img",
  filename:(req,file,callback)=>{
let newName = new Date().getTime() +"_"+file.originalname;
callback(null,newName)
  }
 })
}))
@Post("/ThemPhimUploadHinh")
themPhimUploadHinh(@Response() res,@Body() body ,@UploadedFile() file){
  return this.quanLyPhimService.themPhimUploadHinh(res,body,file)
}

// CapNhatPhimUpload
@UseGuards(AuthGuard("jwt"))
@UseInterceptors(FileInterceptor("file",{
  storage:diskStorage({
   destination:process.cwd() +   "/public/img",
   filename:(req,file,callback)=>{
 let newName = new Date().getTime() +"_"+file.originalname;
 callback(null,newName)
   }
  })
 }))
@Put("CapNhatPhimUpload/:ma_phim")
CapNhatPhimUpload(@Response() res, @UploadedFile() file ,@Param("ma_phim") maPhim,@Body() body){
return this.quanLyPhimService.capNhatPhimUpload(res,file,Number(maPhim),body)
}

//XoaPhim
@UseGuards(AuthGuard("jwt"))
@Delete("/XoaPhim/:ma_phim")
XoaPhim(@Response() res , @Param("ma_phim" ) maPhim){
return this.quanLyPhimService.xoaPhim(res,Number(maPhim))
}


}
