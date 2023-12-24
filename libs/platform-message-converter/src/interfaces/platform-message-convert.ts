import { PlatformMessage } from '../types';

export interface PlatformMessageConvert {
  convert(data: unknown): PlatformMessage;
}
