// @flow

import type { Frequency, RuleID } from './RuleTypes'
import type { Channel } from './Channel'
import Friend from './Friend'

type Interval = {
  unit: number,
  singular: string,
  plural: string
}

export default class Rule {

  id: RuleID
  frequency: Frequency
  channel: ?Channel;

  constructor (data: {id: RuleID, frequency: Frequency, channel: ?Channel}) {
    this.id = data.id
    this.frequency = data.frequency
    this.channel = data.channel
  }

  get name (): string {
    const verbs = {
      'text': 'Text',
      'call': 'Call',
      'message': 'Message',
      'inperson': 'Meet'
    }
    const intervals: Array<Interval> = [
      {unit: 365, singular: 'year', plural: 'years'},
      {unit: 30, singular: 'month', plural: 'months'},
      {unit: 7, singular: 'week', plural: 'weeks'},
      {unit: 1, singular: 'day', plural: 'days'}
    ]
    const verb = this.channel ? verbs[this.channel] : 'Contact'
    for (const interval of intervals) {
      if (this.frequency % interval.unit === 0) {
        const plural = this.frequency !== interval.unit
        return `${verb} every ${this.frequency / interval.unit} ${plural ? interval.plural : interval.singular}`
      }
    }
    throw Error('No matching frequency')
  }

  needsLove (friend: Friend): bool {
    const days = friend.daysSinceLastContact(this.channel)
    return !days || days >= this.frequency
  }
}
