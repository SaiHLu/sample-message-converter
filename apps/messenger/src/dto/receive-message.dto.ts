import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ReceiveMessageWebhook } from '../types';
import { Type } from 'class-transformer';

class UserInfoDto {
  @IsString()
  nickName: string;
}

export class ReceiveMessageDto implements ReceiveMessageWebhook {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  message: string;

  @IsArray()
  @IsString()
  @IsOptional()
  attachments?: [string];

  @IsString()
  profileUrl: string;

  @ValidateNested()
  @Type(() => UserInfoDto)
  userInfo: UserInfoDto;
}
