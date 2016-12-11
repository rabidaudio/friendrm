// @flow

import type { RuleID } from './RuleTypes'
import type { FriendID } from './FriendTypes'
import Rule from './Rule'
import Friend from './Friend'

export type RuleFriend = [RuleID, FriendID];

export type State = {
  // rules: {[id:RuleID]: Rule},
  rules: Rule[],
  friends: {[id:FriendID]: Friend},
  rules_friends: RuleFriend[]
}
