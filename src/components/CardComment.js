import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
import Moment from 'moment';

renderViewMore = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionComment}>{"view more"}</Text>
  );
}

renderViewLess = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionComment}>{"view less"}</Text>
  );
}

const CardComment = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={props.navigateDetail}>
      <View style={styles.sectionUser}>
        <Thumbnail source={props.userImage} style={styles.avatar} />
        <View style={styles.infoUser}>
          <Text style={styles.nameUser}>{props.userName}</Text>
          <Text style={styles.infoDateComment}>{`${Moment(props.dateComment).format('DD MMM YYYY')} at ${Moment(props.dateComment).format('HH:mm')}`}</Text>
        </View>
      </View>
      <View style={styles.sectionComment}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={styles.captionComment}>
          <Text>{props.comment}</Text>
        </ViewMoreText>
      </View>
    </TouchableOpacity>
  )
}

export default CardComment

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#CED6E0'
  },
  sectionUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 32, height: 32
  },
  infoUser: {
    marginLeft: 12
  },
  nameUser: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  infoDateComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#747D8C'
  },
  sectionComment: {
    marginTop: 8
  },
  captionComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  actionCaptionComment: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#45AAF2'
  }
})
