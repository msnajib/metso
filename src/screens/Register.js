import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Button, Text } from 'native-base';

import TextInput from './../components/TextInput';

export default class Register extends Component {

  render() {

    this.props.navigation.setOptions({
      headerTitle: null,
      keyboardHandlingEnabled: false,
      headerTintColor: '#2F3542',
      headerStyle: { backgroundColor: '#fff', elevation: 0 }
    });

    return (
      <View style={styles.container}>
        <View style={styles.sectionTop}>
          <Text style={styles.titleLarge}>{"Register"}</Text>
          <Text style={styles.subTitle}>{"Complete data and create your account"}</Text>
        </View>
        <Form>
          <TextInput
            label="Full Name"
            placeholder="e.g. Muhammad Najib" />
          <TextInput
            label="Email"
            placeholder="e.g. najib@mail.com"
						keyboardType={"email-address"} />
          <TextInput
            passsword={true}
            secureTextEntry={true}
            label="Password"
            placeholder="Input your password ..." />
        </Form>
        <View style={styles.sectionFooter}>
          <Button block style={styles.btnBlock} onPress={()=>this.props.navigation.navigate('Feed')}>
            <Text style={styles.labelBtn}>{"SIGN IN"}</Text>
          </Button>
          <View style={styles.infoFooter}>
            <Text style={styles.textInfo}>{"I already have an account."} <Text style={styles.textInfoLink} onPress={()=>this.props.navigation.goBack()}>{"Sign in"}</Text></Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16
  },
  sectionTop: {
    marginTop: 8,
    marginBottom: 22
  },
  imgBrand: {
    width: 143,
    height: 34,
    marginBottom: 32
  },
  titleLarge: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 8,
    color: '#2F3542'
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  sectionFooter: {
    marginTop: 22
  },
  btnBlock: {
    backgroundColor: '#FD9644',
    borderColor: 'transparent',
    borderRadius: 4
  },
  labelBtn: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 44,
    letterSpacing: 0.16,
    color: '#2F3542',
    textAlign: 'center',
    alignItems: 'center'
  },
  infoFooter: {
    marginTop: 12
  },
  textInfo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  textInfoLink: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#FD9644'
  }
});