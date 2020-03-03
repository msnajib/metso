import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

import CardFeed from './../components/CardFeed';
import CardComment from './../components/CardComment';
import data_comment from './../api/data_comment';

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.id = props.route.params.id
    this.state = {
    };
  }

  componentDidMount() {
    axios({
      url: 'https://socmed1582223928948.mejik.id/graphql',
      method: 'POST',
      data: {
        variables: {
          id: this.id
        },
        query: `
          query($id: String!){
            post(id: $id) {
              id
              text
              createdAt
              createdBy{
                firstName
              }
              comments {
                id
                text
                createdAt
                createdBy {
                  firstName
                }
              }
            }
          }
        `,
      }
    })
    .then(res => {
      console.log(res)
    })
  }

  handleComment() {
    this.props.navigation.navigate('CreateComment')
  }

  render() {

    return (
      <View>
        <Text>{this.id}</Text>
      </View>
    )
    this.props.navigation.setOptions({
      headerTitle: 'Detail Post',
      headerTitleStyle: styles.titleHeader,
      headerStyle: { backgroundColor: '#45AAF2', elevation: 0 },
      headerTintColor: '#ffffff'
    });

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <StatusBar backgroundColor="#007BBF" barStyle="light-content" />
        <ScrollView>
          <View>
            {item.image === "" ?
              <CardFeed
                userImage={{ uri: item.createdBy.userAvatar }}
                userName={item.createdBy.fullName}
                datePost={item.createdAt}
                caption={item.text}
                actionComment={() => this.handleComment()} />
              :
              <CardFeed
                userImage={{ uri: item.createdBy.userAvatar }}
                userName={item.createdBy.fullName}
                datePost={item.createdAt}
                caption={item.text}
                imagePost={item.image}
                actionComment={() => this.handleComment()} />
            }
            <View style={styles.sectionCounter}>
              <View style={styles.contentCounter}>
                <Text style={[styles.textCounter, { fontFamily: 'Poppins-SemiBold', marginRight: 4 }]}>{"2.686"}</Text>
                <Text style={styles.textCounter}>{"Likes"}</Text>
              </View>
            </View>
          </View>

          {data_comment.map((item) =>
            <CardComment
              userImage={{ uri: item.createdBy.userAvatar }}
              userName={item.createdBy.fullName}
              dateComment={item.createdAt}
              comment={item.text}
            />
          )}
        </ScrollView>
        <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('CreateComment')} style={styles.sectionInputComment}>
          <Text style={styles.textInputComment}>{"Type your comment"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailPost;

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    letterSpacing: 0.5,
    color: '#ffffff'
  },
  sectionCounter: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CED6E0'
  },
  contentCounter: {
    flexDirection: 'row'
  },
  textCounter: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  sectionInputComment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#CED6E0'
  },
  textInputComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#747D8C',
    textAlignVertical: 'top'
  }
})