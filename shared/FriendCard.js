import React, { Component, PropTypes } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import moment from 'moment'

class FriendCard extends Component {

  render() {
    const radius = this.props.style.borderRadius || 5;
    return (
      <View style={{
        height: (this.props.width * 1.56),
        width: this.props.width,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 7},
        shadowOpacity: .5,
        shadowRadius: 9,
        borderRadius: radius,
        ...this.props.style
      }}>
        <View style={{
          flex: 2,
          backgroundColor: '#FF4040',
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          flexDirection: 'row'
        }}>
          <Text style={{flex: 1, textAlign: 'center', alignSelf: 'center', fontFamily: 'Avenir'}}>
            {moment(this.props.lastContacted).fromNow()}
          </Text>
        </View>
        <View style={{
            height: this.props.width,
            flexDirection: 'row',
            padding: (0.11*this.props.width)
          }}>{
          this.props.avatar.length == 2
          ? <Text style={{
              flex: 1,
              fontSize: 30,
              alignSelf: 'center',
              textAlign: 'center'
            }}>{this.props.avatar}</Text>
          : <Image style={{flex: 1, borderRadius: 6}} source={{uri: this.props.avatar}} />
        }</View>
        <View style={{
            flex: 3,
            flexDirection: 'row',
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
          }}>
          <Text 
            adjustsFontSizeToFit={true}
            minimumFontScale={0.4}
            numberOfLines={2}
            ellipsizeMode='tail'
            style={{
              flex: 1,
              marginBottom: radius,
              textAlign: 'center',
              fontFamily: 'Avenir',
              fontSize: 16
            }}>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}

FriendCard.propTypes = {
  width: PropTypes.number,
  lastContacted: PropTypes.instanceOf(Date),
  avatar: (props, propName, componentName) => {
    const val = props[propName]
    if(!val || !(
      val.match(/^https?:\/\/.*/)
      || val.match(/^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$/)
    )){
      return Error(`Invalid avatar (must be url or emoji): ${val}`)
    }
  }
}

export default FriendCard