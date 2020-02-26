import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Label, Input, Item, Icon } from 'native-base';

const TextInput = (props) => {

	return (
		<View style={styles.sectionForm}>
			<Label style={styles.labelInput}>{props.label}</Label>
			<Item regular style={styles.itemInput}>
				<Input
					{...props}
					secureTextEntry={props.secureTextEntry}
					value={props.value}
					onChangeText={props.onChangeText}
					placeholder={props.placeholder}
					keyboardType={props.keyboardType}
					placeholderTextColor={"#747D8C"}
					style={styles.input} />
				{props.passsword ?
					props.secureTextEntry ?
						<Icon active
							onPress={props.changeVisibility}
							type="MaterialIcons"
							name="visibility-off"
							style={styles.iconEye} />
						:
						<Icon active
							onPress={props.changeVisibility}
							type="MaterialIcons"
							name="visibility"
							style={styles.iconEye} />
					:
					null
				}
			</Item>
		</View>
	)
}

export default TextInput

const styles = StyleSheet.create({
	sectionForm: {
		paddingVertical: 10
	},
	labelInput: {
		fontSize: 'Poppins-Medium',
		fontSize: 12,
		lineHeight: 18,
		color: '#2F3542',
		marginBottom: 8
	},
	itemInput: {
		backgroundColor: '#F1F2F6',
		borderColor: 'transparent',
		borderRadius: 4
	},
	input: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		lineHeight: 44,
		color: '#2F3542',
		paddingBottom: 0,
		paddingTop: 0,
		paddingLeft: 16,
		paddingRight: 16
	},
	iconEye: {
		paddingRight: 16,
		fontSize: 16,
		color: '#57606F'
	}
})
