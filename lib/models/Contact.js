// @flow
import type { Channel } from './Channel'

import Friend from './Friend'

export default class Contact {

  timestamp: Date
  friend: Friend
  channel: ?Channel;

  constructor (data: {timestamp: Date, friend: Friend, channel: ?Channel}) {
    this.timestamp = data.timestamp
    this.friend = data.friend
    this.channel = data.channel
  }
}
