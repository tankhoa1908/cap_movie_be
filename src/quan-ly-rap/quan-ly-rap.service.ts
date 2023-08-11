import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, failCode, successCode } from 'src/config/response';

@Injectable()
export class QuanLyRapService {
 prisma = new PrismaClient()
  // LayThongTinHeThongRap
 async layThongTinHeThongRap(res,maHTR){
try {
  let checkmaHTR = await this.prisma.heThongRap.findFirst({where:{ma_he_thong_rap:maHTR}})
if(checkmaHTR){
  let data = checkmaHTR;
  successCode(res,data,"get data success")
}else{
  failCode(res,null,"he thong rap not exist")
}

} catch  {
  errorCode(res,"error BE")
}
  }
  // LayThongTinCumRapTheoHeThong
  async layThongTinCumRapTheoHeThong(res,maHTR){
try {
  let checkmaHTR = await this.prisma.heThongRap.findFirst({where:{ma_he_thong_rap:maHTR}})
if(checkmaHTR){
  let data = await this.prisma.heThongRap.findFirst({include:{cumRap:true},where:{ma_he_thong_rap:maHTR}});
  successCode(res,data,"get data success")
}else{
  failCode(res,null,"he thong rap not exist")
}
} catch  {
  errorCode(res,"error BE")
}
  }
  // LayThongTinLichChieuHeThongRap
  async layThongTinLichChieuHeThongRap(res,maHTR){
    try {
      let checkmaHTR = await this.prisma.heThongRap.findFirst({where:{ma_he_thong_rap:maHTR}})
      if(checkmaHTR){
let data = await this.prisma.heThongRap.findFirst({include:{cumRap:{include:
  {rapPhim:{include:{lichChieu:true}}}}},where:{ma_he_thong_rap:maHTR}})
  successCode(res,data,"get data success")
      }else{
        failCode(res,null,"he thong rap not exist")
      }  
    } catch  {
      errorCode(res,"error BE")
    }
  }
  // LayThongTinLichChieuPhim
  async layThongTinLichChieuPhim(res,maPhim){
    try {
      let checkMaPhim = await this.prisma.phim.findFirst({where:{ma_phim:maPhim}});
      if(checkMaPhim){
  let data = await this.prisma.phim.findFirst({include:{lichChieu:true},where:{ma_phim:maPhim}});
  successCode(res,data,"get data success")
      }else{
        failCode(res,null,"movie not exist")
      }
    } catch  {
      errorCode(res,"error BE")
    }
  }
}
