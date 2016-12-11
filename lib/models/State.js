// @flow

import type { RuleID } from './RuleTypes'
import type { FriendID } from './FriendTypes'
import Rule from './Rule'
import Friend from './Friend'
import type { Channel } from './Channel'

export type RuleFriend = [RuleID, FriendID];
export type FriendMap = {[id:FriendID]: Friend};
export type Group = {rule: Rule, friendsInNeed: Friend[], friendsInDeed: Friend[]};

export default class State {

  // rules: {[id:RuleID]: Rule}
  rules: Rule[]
  friends: FriendMap
  rulesFriends: RuleFriend[];

  constructor (data: {rules: Rule[], friends: FriendMap, rulesFriends: RuleFriend[]}) {
    this.rules = data.rules
    this.friends = data.friends
    this.rulesFriends = data.rulesFriends
  }

  getFriendsForRule (rule: Rule): Friend[] {
    return this.rulesFriends.filter((a) => {
      const [ruleId] = a
      return rule.id === ruleId
    }).map((a) => {
      const [ , friendId ] = a
      return this.friends[friendId]
    })
  }

  sortFriendsByChannel (channel: ?Channel): (a: Friend, b: Friend) => number {
    return (a, b) => (b.daysSinceLastContact(channel) || Infinity) -
              (a.daysSinceLastContact(channel) || Infinity)
  }

  get friendGroups () : Group[] {
    return this.rules.map((rule) => {
      const friends = this.getFriendsForRule(rule)
      let friendsInNeed: Friend[] = []
      let friendsInDeed: Friend[] = []
      for (const friend of friends) {
        if (rule.needsLove(friend)) {
          friendsInNeed.push(friend)
        } else {
          friendsInDeed.push(friend)
        }
      }
      const sortFn = this.sortFriendsByChannel(rule.channel)
      friendsInNeed = friendsInNeed.sort(sortFn)
      friendsInDeed = friendsInDeed.sort(sortFn)
      return { rule, friendsInNeed, friendsInDeed }
    })
  }
}
