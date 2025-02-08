import { IsString } from 'class-validator';

export class UpdateInfoDto {
  @IsString()
  profile_image: string;

  @IsString()
  nickname: string;

  @IsString()
  passwords: string;
}
