import { PlatformMessageConvert } from './interfaces/platform-message-convert';

export class ConvertMessageHandler {
  private readonly channels: Record<string, PlatformMessageConvert> = {};

  constructor(private readonly platform: PlatformMessageConvert) {}

  // register(channelType: ChannelType, gateway: PlatformMessageConvert) {
  //   this.channels[channelType] = gateway;
  // }

  convert(data: unknown) {
    // this.channels[channelType] = this.platform;

    // if (!this.channels[channelType])
    //   throw new Error('Unsupported channel type.');

    return this.platform.convert(data);
    // return this.channels[channelType].convert(data);
  }
}
