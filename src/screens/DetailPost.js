import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

import CardFeed from './../components/CardFeed';
import CardComment from './../components/CardComment';
import data_comment from './../api/data_comment';

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.id = props.route.params.id
    this.state = {
      item: null
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
      console.log(res.data.data.post);
      this.setState({
        item: res.data.data.post 
      })
    })
  }

  handleComment() {
    this.props.navigation.navigate('CreateComment')
  }

  render() {
    this.props.navigation.setOptions({
      headerTitle: 'Detail Post',
      headerTitleStyle: styles.titleHeader,
      headerStyle: { backgroundColor: '#45AAF2', elevation: 0 },
      headerTintColor: '#ffffff'
    });

    if (this.state.item == null) 
      return <ActivityIndicator style={{marginTop: 100}}/>

    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <StatusBar backgroundColor="#007BBF" barStyle="light-content" />
        <ScrollView>
          <View>
            {this.state.item.image === "" || this.state.item.image == null ?
              <CardFeed
                userImage={{ uri: "https://i.pravatar.cc/100" }}
                userName={this.state.item.createdBy.firstName}
                datePost={this.state.item.createdAt}
                caption={this.state.item.text}
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

          {this.state.item.comments.map((itemComment) =>
            <CardComment
              userImage={{ uri: "https://i.pravatar.cc/100" }}
              userName={itemComment.createdBy.firstName}
              dateComment={itemComment.createdAt}
              comment={itemComment.text}
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