/* eslint-env mocha */

import { expect } from 'chai'

import { AvatarType } from '../shared/types'

describe('AvatarType', () => {
  it('should accept a url as an avatar', () => {
    expect(
      AvatarType({
        avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200'
      }, 'avatar')
    ).to.be.undefined
  })

  it('should accept an emoji as an avatar', () => {
    expect(
      AvatarType({avatar: '💩'}, 'avatar')
    ).to.be.undefined
  })

  it('should not accept blank avatar', () => {
    expect(() => {
      throw AvatarType({avatar: null}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })

  it('should not accept arbitrary text', () => {
    expect(() => {
      throw AvatarType({avatar: 'hello, world'}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })

  it('should not accept more than one emoji', () => {
    expect(() => {
      throw AvatarType({avatar: '👻😷'}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })
})
