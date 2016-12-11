import { PropTypes } from 'react'

export const ChannelType = PropTypes.oneOf([
  'text', 'call', 'message', 'inperson'
])

export const ContactType = PropTypes.shape({
  timestamp: PropTypes.instanceOf(Date).isRequired,
  channel: ChannelType.isRequired
})

export const RuleType = PropTypes.shape({
  channel: ChannelType,
  frequency: PropTypes.number.isRequired // days
})

const verbs = {
  'text': 'Text',
  'call': 'Call',
  'message': 'Message',
  'inperson': 'Meet'
}
const intervals = [
  {unit: 365, singular: 'year', plural: 'years'},
  {unit: 30, singular: 'month', plural: 'months'},
  {unit: 7, singular: 'week', plural: 'weeks'},
  {unit: 1, singular: 'day', plural: 'days'}
]

export const getNameForRule = (rule) => {
  const verb = rule.channel ? verbs[rule.channel] : 'Contact'
  for (const interval of intervals) {
    if (rule.frequency % interval.unit === 0) {
      const plural = rule.frequency !== interval.unit
      return `${verb} every ${rule.frequency % 30} ${plural ? interval.plural : interval.singular}`
    }
  }
  throw Error('No matching frequency')
}

export const AvatarType = (props, propName, componentName) => {
  const val = props[propName]
  const urlRegex = /^https?:\/\/.*/
  const emojiRegex = /^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$/
  if (!val || !(val.match(urlRegex) || val.match(emojiRegex))) {
    return Error(`Invalid avatar (must be url or emoji): ${val}`)
  }
}

export const FriendType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: AvatarType,
  // rules: PropTypes.arrayOf(RuleType).isRequired,
  contacts: PropTypes.arrayOf(ContactType).isRequired
})

FriendType.lastContacted = (friend) => {
  const contactTimes = friend.contacts.map((c) => c.timestamp)
  return contactTimes.length === 0 ? null : contactTimes[contactTimes.length - 1]
}
