import React, { Component } from 'react';
import { View, Image, StatusBar, ScrollView } from 'react-native';
import { Thumbnail, Icon, Fab } from 'native-base';

import CardFeed from './../components/CardFeed';
import data_feed from '../api/data_feed';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleComment() {
		this.props.navigation.navigate('CreateComment')
	}

	render() {

		this.props.navigation.setOptions({
			headerTitleAlign: "center",
			headerLeft: () => <Thumbnail source={{ uri: 'https://i.pravatar.cc/300' }} style={{ width: 32, height: 32 }} />,
			headerTitle: () => <Image source={require('./../assets/img/logo-title.png')} style={{ width: 84, height: 20 }} />,
			headerRight: () => <Icon type="MaterialIcons" name="notifications" style={{ color: '#ffffff' }} />,
			headerStyle: { backgroundColor: '#45AAF2', elevation: 0 },
			headerLeftContainerStyle: { marginLeft: 16 },
			headerRightContainerStyle: { marginRight: 16 },
		});

		return (
			<View style={{ backgroundColor: '#ffffff' }}>
				<StatusBar backgroundColor="#007BBF" barStyle="light-content" />
				<ScrollView>
					{data_feed.map((item) =>
						item.image === "" ?
							<CardFeed
								navigateDetail={() => this.props.navigation.navigate('DetailPost', { item })}
								userImage={{ uri: item.createdBy.userAvatar }}
								userName={item.createdBy.fullName}
								datePost={item.createdAt}
								caption={item.text}
								actionComment={() => this.handleComment()}
							/>
							:
							<CardFeed
								navigateDetail={() => this.props.navigation.navigate('DetailPost', { item })}
								userImage={{ uri: item.createdBy.userAvatar }}
								userName={item.createdBy.fullName}
								datePost={item.createdAt}
								caption={item.text}
								imagePost={item.image}
								actionComment={() => this.handleComment()}
							/>
					)}
				</ScrollView>
				<Fab
					active={this.state.active}
					direction="up"
					containerStyle={{}}
					style={{ backgroundColor: '#45AAF2' }}
					position="bottomRight"
					onPress={() => this.props.navigation.navigate('CreatePost')}>
					<Icon type="MaterialIcons" name="mode-edit" />
				</Fab>
			</View>
		);
	}
}

export default Feed;
