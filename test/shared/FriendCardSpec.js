import { expect } from 'chai'

import FriendCard from '../../shared/FriendCard'

describe('FriendCard', () => {

  it('should accept a url as an avatar', () => {
    expect(
      FriendCard.propTypes.avatar({ avatar: 'https://www.gravatar.com/avatar/e3f99640d60577f72086b54087423593.png?s=200'}, 'avatar')
    ).to.be.undefined
  })

  it('should accept an emoji as an avatar', () => {
    expect(
      FriendCard.propTypes.avatar({ avatar: '💩'}, 'avatar')
    ).to.be.undefined
  })

  it('should not accept no avatar', () => {
    expect( () => {
      FriendCard.propTypes.avatar({ avatar: null}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })

  it('should not accept arbitrary text', () => {
    expect( () => {
      FriendCard.propTypes.avatar({ avatar: 'hello, world'}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })

  it('should not accept more than one emoji', () => {
    expect( () => {
      FriendCard.propTypes.avatar({ avatar: '👻😷'}, 'avatar')
    }).to.throw(/Invalid avatar/)
  })

})