// @flow

export type Frequency = number;
import type { Channel } from './Channel'

type Interval = {
  unit: number,
  singular: string,
  plural: string
};

export default class Rule {

  frequency: Frequency
  channel: ?Channel

  constructor (data: {frequency: Frequency, channel: ?Channel}) {
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
        return `${verb} every ${this.frequency % 30} ${plural ? interval.plural : interval.singular}`
      }
    }
    throw Error('No matching frequency')
  }
}
