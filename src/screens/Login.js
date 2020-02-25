import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Form, Button, Text } from 'native-base';

import TextInput from './../components/TextInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

		this.props.navigation.setOptions({
			headerMode: 'none',
			headerShown: false,
			keyboardHandlingEnabled: false
		});

		return (
			<View style={styles.container}>
				<View style={styles.sectionTop}>
					<Image
						source={require('./../assets/img/logo.png')}
						style={styles.imgBrand} />
					<Text style={styles.titleLarge}>{"Welcome!"}</Text>
					<Text style={styles.subTitle}>{"Please enter your account to continue"}</Text>
				</View>
				<Form>
					<TextInput
						label="Email"
						placeholder="e.g. najib@mail.com" />
					<TextInput
						label="Password"
						placeholder="Input your password ..." />
				</Form>
				<View style={styles.sectionFooter}>
					<Button block style={styles.btnBlock} onPress={() => this.props.navigation.navigate('Register')}>
						<Text style={styles.labelBtn}>{"SIGN IN"}</Text>
					</Button>
					<View style={styles.infoFooter}>
						<Text style={styles.textInfo}>{"I don't have an account yet."} <Text style={styles.textInfoLink}>{"Register"}</Text></Text>
					</View>
				</View>
			</View>
		);
	}
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingHorizontal: 16
	},
	sectionTop: {
		marginTop: 44,
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
