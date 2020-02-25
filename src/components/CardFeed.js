import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import ViewMoreText from 'react-native-view-more-text';

renderViewMore = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionPost}>{"view more"}</Text>
  );
}

renderViewLess = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionPost}>{"view less"}</Text>
  );
}

const CardFeed = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionUser}>
        <Thumbnail source={props.userImage} style={styles.avatar} />
        <View style={styles.infoUser}>
          <Text style={styles.nameUser}>{props.userName}</Text>
          <Text style={styles.infoDatePost}>{props.datePost}</Text>
        </View>
      </View>
      <View style={styles.sectionPost}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={styles.captionPost}>
          <Text>{props.caption}</Text>
        </ViewMoreText>
        {props.imagePost &&
          <Image source={props.imagePost} style={styles.imagePost} />
        }
      </View>
      <View style={styles.sectionActionFeed}>
        <TouchableOpacity onPress={props.actionLike} style={styles.contentAction}>
          <Icon type="MaterialIcons" name="thumb-up" style={styles.iconAction} />
          <Text style={styles.textAction}>{"Like"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.actionComment} style={styles.contentAction}>
          <Icon type="MaterialIcons" name="comment" style={styles.iconAction} />
          <Text style={styles.textAction}>{"Comment"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.actionShare} style={styles.contentAction}>
          <Icon type="MaterialIcons" name="reply" style={styles.iconAction} />
          <Text style={styles.textAction}>{"Share"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardFeed

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
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
  infoDatePost: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#747D8C'
  },
  sectionPost: {
    marginTop: 8,
    marginBottom: 12
  },
  captionPost: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542',
    marginBottom: 12
  },
  actionCaptionPost: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#45AAF2',
    marginBottom: 12
  },
  imagePost: {
    width: '100%',
    height: 400,
    borderRadius: 8
  },
  sectionActionFeed: {
    marginHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentAction: {
    flexDirection: 'row'
  },
  iconAction: {
    fontSize: 20,
    color: '#57606F',
    marginRight: 4
  },
  textAction: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#57606F'
  }
})
