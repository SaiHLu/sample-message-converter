import { IsArray, IsOptional, IsString } from 'class-validator';
import { ReceiveMessageWebhook } from '../types';

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
}
