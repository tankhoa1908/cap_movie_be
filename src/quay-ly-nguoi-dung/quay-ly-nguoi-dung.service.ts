import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { errorCode, failCode, successCode } from 'src/config/response';
import {hashSync,compareSync} from "bcryptjs"
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class QuayLyNguoiDungService {
  constructor(private jwtService :JwtService,
    private configService:ConfigService){}
 prisma = new PrismaClient();

// dang Ky
async dangKy(userSignUp,res){
try {
  let checkEmail = await this.prisma.nguoiDung.findFirst({where:{email:userSignUp.email}});
  let checkSDT = await this.prisma.nguoiDung.findFirst({where:{so_dt:userSignUp.soDt}});

  if(checkEmail == null){
    if(checkSDT==null){
      let newData={ho_ten:userSignUp.hoTen
        ,email:userSignUp.email,
        so_dt:userSignUp.soDt,
        mat_khau:hashSync(userSignUp.matKhau,10),
       loai_nguoi_dung:"customer"
    
      }
    await this.prisma.nguoiDung.create({data:newData})
    successCode(res,"","sign up success")

    }else{
      failCode(res,null,"numberPhone existed")
    }
  }else{
    failCode(res,null,"email existed")
  }
} catch  {
  errorCode(res,"error BE")
}

};

// dang Nhap
async dangNhap(userLogin,res){
  try {
    let checUser = await this.prisma.nguoiDung.findFirst({where:{email:userLogin.email}});
   if(checUser){
 if(compareSync(userLogin.matKhau,checUser.mat_khau)){
  
let token = this.jwtService.sign({data:checUser},{secret:this.configService.get("KEY"),expiresIn:"10m"})
successCode(res,token,"login success") 
}else{
failCode(res,null,"password wrong")
 }
   }else{
    failCode(res,null,"email not exist")
   }

  } catch  {
    errorCode(res,"error BE")
  }




}
// LayDanhSachNguoiDung
async getListND(res){
try {
  let data = await this.prisma.nguoiDung.findMany();
  successCode(res,data,"get data success")
} catch  {
  errorCode(res,"error Be")
}
}
// LayDanhSachNguoiDungPhanTrang
async getUserPhanTrang(page,pageSize,res){
try {
 
  let index = (page - 1) * pageSize;
  let data = await this.prisma.nguoiDung.findMany({
   skip: index,
   take: Number(pageSize)
  });
  successCode(res,data,"get data success")
} catch  {
  errorCode(res,"error BE")
}
} 
// TimKiemNguoiDung

async searchNguoiDung(res,query){
  try {
   let checkName= await this.prisma.nguoiDung.findMany({where:
      {ho_ten:{contains:query}}})
  let checkEmail  =  await this.prisma.nguoiDung.findMany({where:
        {email:{contains:query}}})
  if(checkEmail.length !==0 ){
    checkEmail;
    successCode(res,checkEmail,"get data success")

  }else if( checkName.length !==0){
   checkName;
   successCode(res,checkName,"get data success")
  }else{
    failCode(res,null,"user not exist")
  }
  } catch  {
    errorCode(res,"error BE")
  }
}
// TimKiemNguoiDungPhanTrang
async searchUserPhanTrang(res,page,pageSize,query){
try {
  let index = (page-1)*pageSize;
  let checkName= await this.prisma.nguoiDung.findMany({where:
    {ho_ten:{contains:query}}, skip: index,take: Number(pageSize)   })
let checkEmail  =  await this.prisma.nguoiDung.findMany({where:
      {email:{contains:query}}, skip: index,
      take: Number(pageSize)})
if(checkEmail.length !==0 ){
  checkEmail;
  successCode(res,checkEmail,"get data success")

}else if( checkName.length !==0){
 checkName;
 successCode(res,checkName,"get data success")
}else{
  failCode(res,null,"user not exist")
}
} catch  {
  errorCode(res,"error BE")
}
}
// ThongTinTaiKhoan
async thongTinTaiKhoan(res){
  try {
    let data = await this.prisma.nguoiDung.findMany();
    successCode(res,data,"get data success")
  } catch  {
    errorCode(res,"error")
  }
}
// LayThongTinNguoiDung
async layThongTinNguoiDung(res,userId){
  try {
    let checkIdUser = await this.prisma.nguoiDung.findFirst({where:{tai_khoan:userId}});
    if(checkIdUser){
      let data = checkIdUser;
      successCode(res,data,"get data success")
    }else{
      failCode(res,null,"user not exist")
    }
  } catch  { 
    errorCode(res,"error BE")
  }
}
// ThemNguoiDung
async themNguoiDung(res,user){
  try {
    let checEmail = await this.prisma.nguoiDung.findFirst({where:{email:user.email}});
    let checkSDT = await this.prisma.nguoiDung.findFirst({where:{so_dt:user.soDt}});
  
    if(checEmail == null){
      if(checkSDT==null){
        let newData={ho_ten:user.hoTen
          ,email:user.email,
          so_dt:user.soDt,
          mat_khau:hashSync(user.matKhau,10),
         loai_nguoi_dung:"customer"
      
        }
      await this.prisma.nguoiDung.create({data:newData})
      successCode(res,"","Add User success")
  
      }else{
        failCode(res,null,"numberPhone existed")
      }
    }else{
      failCode(res,null,"email existed")
    }
  } catch  {
    errorCode(res,"error BE")
  }
}
// CapNhatThongTinNguoiDung
async capNhatThongTinNguoiDung(res,userId,user){
try {
  let checkEmail = await this.prisma.nguoiDung.findFirst({where:{email:user.email}});
  let checkSDT = await this.prisma.nguoiDung.findFirst({where:{so_dt:user.soDt}});
  let checkUserById = await this.prisma.nguoiDung.findFirst({where:{tai_khoan:userId}});
if(checkUserById){
  if(checkEmail == null || checkEmail.email ==checkUserById.email){
    if(checkSDT==null || checkSDT.email ==checkUserById.so_dt){
      let newData={ho_ten:user.hoTen
        ,email:user.email,
        so_dt:user.soDt,
        mat_khau:hashSync(user.matKhau,10),
       loai_nguoi_dung:"Customer"
    
      }
    await this.prisma.nguoiDung.update({where:{tai_khoan:userId},data:newData})
    successCode(res,"","Update user success")

    }else{
      failCode(res,null,"numberPhone existed")
    }
  }else{
    failCode(res,null,"email existed")
  }
}else{
  failCode(res,null,"user not exist")
}
} catch  {
  errorCode(res,"error BE")
}
}
// CapNhatThongTinNguoiDung-Admin 
async capNhatThongTinNguoiDungAdmin(res,user,userId){
  try {
    let checkEmail = await this.prisma.nguoiDung.findFirst({where:{email:user.email}});
    let checkSDT = await this.prisma.nguoiDung.findFirst({where:{so_dt:user.soDt}});
  let checkUserById = await this.prisma.nguoiDung.findFirst({where:{tai_khoan:userId}});
    
if(checkUserById){
  if(checkEmail == null || checkEmail.email == checkUserById.email){
    if(checkSDT==null || checkSDT.so_dt ==checkUserById.so_dt){
      let newData={ho_ten:user.hoTen
        ,email:user.email,
        so_dt:user.soDt,
        mat_khau:hashSync(user.matKhau,10),
       loai_nguoi_dung:user.loaiNguoiDung
    
      }
    await this.prisma.nguoiDung.update({where:{tai_khoan:userId},data:newData})
    successCode(res,"","Update user success")

    }else{
      failCode(res,null,"numberPhone existed")
    }
  }else{
    failCode(res,null,"email existed")
  }
}else{
 failCode(res,null,"user not exist")
}
  } catch  {
    errorCode(res,"error BE")
  }
}
// XoaNguoiDung
async xoaNguoiDung(res,userId){ 
  try {
    let checkUserId = await this.prisma.nguoiDung.findFirst({where:{tai_khoan:userId}})
  let checkIdDatve = await this.prisma.datVe.findFirst({where:{tai_khoan:userId}})
    if(checkUserId){
if(checkIdDatve==null){
  await this.prisma.nguoiDung.delete({where:{tai_khoan:userId}})
  successCode(res,"","Delete data success")
}else{
  failCode(res,null,"Can't delete user oredered ticket")
}
    }else{
 failCode(res,null,"user not exist")
    }
  } catch(e) {
    errorCode(res,e.message)
  }
}

// LayDanhSachLoaiNguoiDung
async getListLoaiND(res){
  try {
    let data = await this.prisma.$queryRaw(Prisma.sql`select loai_nguoi_dung  from nguoiDung group by loai_nguoi_dung`);
    successCode(res,data,"get data success")  
  } catch  {
    errorCode(res,"error BE")
  }
} 


}

