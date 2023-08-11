import { Controller, Get, Response,Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuanLyRapService } from './quan-ly-rap.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('api/QuanLyRap')
export class QuanLyRapController {
  constructor(private readonly quanLyRapService: QuanLyRapService) {}

//  LayThongTinHeThongRap
@UseGuards(AuthGuard("jwt"))
@Get("/LayThongTinHeThongRap/:ma_HTR")
LayThongTinHeThongRap(@Response() res ,@Param("ma_HTR") maHTR){
return this.quanLyRapService.layThongTinHeThongRap(res,Number(maHTR))
}
// LayThongTinCumRapTheoHeThong
@UseGuards(AuthGuard("jwt"))
@Get("/LayThongTinCumRapTheoHeThong/:ma_HTR")
LayThongTinCumRapTheoHeThong(@Response() res ,@Param("ma_HTR") maHTR){
  return this.quanLyRapService.layThongTinCumRapTheoHeThong(res,Number(maHTR))
}
// LayThongTinLichChieuHeThongRap
@UseGuards(AuthGuard("jwt"))
@Get("/LayThongTinLichChieuHeThongRap/:ma_HTR")
LayThongTinLichChieuHeThongRap(@Response() res,@Param("ma_HTR") maHTR){
  return this.quanLyRapService.layThongTinLichChieuHeThongRap(res,Number(maHTR))
}
// LayThongTinLichChieuPhim
@UseGuards(AuthGuard("jwt"))
@Get("/LayThongTinLichChieuPhim/:ma_phim")
LayThongTinLichChieuPhim(@Response() res ,@Param("ma_phim") maPhim){
  return this.quanLyRapService.layThongTinLichChieuPhim(res,Number(maPhim))
}

}
