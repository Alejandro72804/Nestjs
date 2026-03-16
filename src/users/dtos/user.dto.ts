import {
  MinLength,
  IsString,
  IsEmail,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
} from 'class-validator';

import { Type } from 'class-transformer';
import { CreateProfileDto, UpdProfileDto } from './profile.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password!: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile!: CreateProfileDto;
}

export class UpdUserDto extends PartialType(
  OmitType(CreateUserDto, ['profile']),
) {
  @ValidateNested()
  @Type(() => UpdProfileDto)
  @IsOptional()
  profile?: UpdProfileDto;
}
