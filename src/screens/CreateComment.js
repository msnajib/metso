import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon, Thumbnail } from 'native-base';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    this.props.navigation.setOptions({
      headerLeft: () => <Icon
        type="MaterialIcons"
        onPress={() => this.props.navigation.goBack()}
        name="clear"
        style={{ color: '#2F3542' }} />,
      headerTitle: 'Comment Post',
      headerTitleStyle: styles.titleHeader,
      headerRight: () => <Icon
        type="MaterialIcons"
        onPress={() => this.props.navigation.goBack()}
        name="check"
        style={{ color: '#45AAF2' }} />,
      keyboardHandlingEnabled: false,
      headerTintColor: '#2F3542',
      headerStyle: { backgroundColor: '#fff', elevation: 0 },
      headerLeftContainerStyle: { marginLeft: 16 },
      headerRightContainerStyle: { marginRight: 16 },
    });

    return (
      <View style={styles.container}>
        <View style={styles.sectionTextPost}>
          <Thumbnail source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.avatarUserPost} />
          <TextInput
            style={styles.textPost}
            selectionColor={"#45AAF2"}
            numberOfLines={10}
            multiline={true}
            placeholder={'Type your comment ...'} />
        </View>
      </View>
    );
  }
}

export default CreateComment;

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    letterSpacing: 0.5,
    color: '#2F3542'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
  sectionTextPost: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#CED6E0'
  },
  avatarUserPost: {
    width: 32,
    height: 32,
    left: 16,
    position: 'absolute'
  },
  textPost: {
    flex: 1,
    marginLeft: 48,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2F3542',
    padding: 4,
    textAlignVertical: 'top'
  },
  sectionAddPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  textTitleAddPhoto: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#45AAF2',
    marginLeft: 8,
    textAlignVertical: 'top'
  }
})
