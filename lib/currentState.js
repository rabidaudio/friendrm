// @flow
import Friend from './models/Friend'
import Rule from './models/Rule'
import Contact from './models/Contact'
import State from './models/State'

const textEveryTwoWeeks = new Rule({id: 1, channel: 'text', frequency: 14})

const contactEverySixMonths = new Rule({id: 2, channel: null, frequency: 6 * 30})

const john = new Friend({
  id: 1,
  name: 'John Smith',
  avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200',
  contacts: [
    new Contact({
      timestamp: new Date(2016, 11, 8),
      // timestamp: new Date(2016, 10, 8),
      channel: 'text',
      friend: john
    }),
    new Contact({
      timestamp: new Date(2015, 11, 25),
      channel: 'call',
      friend: john
    })
  ]
})
const niko = new Friend({
  id: 2,
  name: 'Nikolaos Papanikolopoulos',
  avatar: '💩',
  contacts: []
})

const state = new State({
  rules: [textEveryTwoWeeks, contactEverySixMonths],
  friends: {[john.id]: john, [niko.id]: niko},
  rulesFriends: [
    [textEveryTwoWeeks.id, john.id],
    [textEveryTwoWeeks.id, niko.id],
    [contactEverySixMonths.id, john.id]
  ]
})

export default state
