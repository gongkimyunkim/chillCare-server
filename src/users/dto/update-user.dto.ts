import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  profile_image: string;

  keyword: string;
}
