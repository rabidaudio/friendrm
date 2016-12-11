// @flow
import type { Channel } from './Channel'

export default class Contact {

  timestamp: Date
  channel: ?Channel;

  constructor (data: {timestamp: Date, channel: ?Channel}) {
    this.timestamp = data.timestamp
    this.channel = data.channel
  }
}
