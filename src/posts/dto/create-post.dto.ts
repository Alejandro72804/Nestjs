import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  content!: string;

  @IsString()
  @IsOptional()
  cover_Img!: string;

  @IsString()
  @IsOptional()
  summary!: string;
}
