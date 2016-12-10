import React, { Component, PropTypes } from 'react'

class FriendCard extends Component {

  static propTypes = {
    lastContacted: PropTypes.instanceOf(Date),
    avatar: (props, propName, componentName) => {
      const val = props[propName]
      if(!val || !(
        val.match(/^https?:\/\/.*/)
        || val.match(/^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$/)
      )){
        throw `Invalid avatar (must be url or emoji): ${val}`
      }
    }
  }

  render() {

  }
}

export default FriendCard