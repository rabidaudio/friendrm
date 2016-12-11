// @flow
import moment from 'moment'

import type { Channel } from './Channel'
import type { FriendID } from './FriendTypes'
import Contact from './Contact'

export class Avatar {

  value: string
  type: 'emoji' | 'url';

  constructor (value: string) {
    const urlRegex = /^https?:\/\/.*/
    const emojiRegex = /^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$/
    if (value.match(emojiRegex)) {
      this.value = value
      this.type = 'emoji'
    } else if (value.match(urlRegex)) {
      this.value = value
      this.type = 'url'
    } else {
      throw Error(`Invalid avatar (must be url or emoji): ${value}`)
    }
  }
}

export default class Friend {

  id: FriendID
  name: string
  avatar: Avatar
  contacts: Contact[];

  constructor (data: {id: FriendID, name: string, avatar: string, contacts: Contact[]}) {
    this.id = data.id
    this.name = data.name
    this.avatar = new Avatar(data.avatar)
    this.contacts = data.contacts
  };

  lastContactDateVia (channel: ?Channel): ?Date {
    const contacts = channel ? this.contacts.filter((c) => c.channel === channel) : this.contacts
    const contactTimes = contacts.map((c) => c.timestamp).sort()
    return contactTimes.length === 0 ? null : contactTimes[contactTimes.length - 1]
  }

  lastContactStringVia (channel: ?Channel): string {
    const date = this.lastContactDateVia(channel)
    return date ? moment(date).fromNow() : 'Never'
  }

  daysSinceLastContact (channel: ?Channel): ?number {
    const date = this.lastContactDateVia(channel)
    const oneDay = 1000 * 60 * 60 * 24
    return date ? Math.round((new Date().getTime() - date.getTime()) / oneDay) : null
  }
}
