import { Module } from '@nestjs/common';
import { QuayLyNguoiDungService } from './quay-ly-nguoi-dung.service';
import { QuayLyNguoiDungController } from './quay-ly-nguoi-dung.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/strategy.jwt';

@Module({
  imports:[JwtModule.register({})],
  controllers: [QuayLyNguoiDungController],
  providers: [QuayLyNguoiDungService,JwtStrategy]
})
export class QuayLyNguoiDungModule {}
