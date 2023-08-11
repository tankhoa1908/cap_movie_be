import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuanLyDatVeModule } from './quan-ly-dat-ve/quan-ly-dat-ve.module';
import { QuayLyNguoiDungModule } from './quay-ly-nguoi-dung/quay-ly-nguoi-dung.module';

import { ConfigModule } from '@nestjs/config';
import { QuanLyPhimModule } from './quan-ly-phim/quan-ly-phim.module';
import { QuanLyRapModule } from './quan-ly-rap/quan-ly-rap.module';

@Module({
  imports: [QuanLyDatVeModule, QuayLyNguoiDungModule,
  ConfigModule.forRoot({isGlobal:true}),
  QuanLyPhimModule,
  QuanLyRapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
