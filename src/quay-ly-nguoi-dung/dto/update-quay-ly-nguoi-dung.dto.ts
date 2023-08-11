import { PartialType } from '@nestjs/swagger';
import { CreateQuayLyNguoiDungDto } from './create-quay-ly-nguoi-dung.dto';

export class UpdateQuayLyNguoiDungDto extends PartialType(CreateQuayLyNguoiDungDto) {}
