import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Dimensions, ScrollView } from 'react-native';
import { Thumbnail, Icon } from 'native-base';

import CardFeed from './../components/CardFeed';
import TextInput from './../components/TextInput';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
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
			<View>
				<StatusBar backgroundColor="#007BBF" barStyle="light-content" />
				<ScrollView>
					<CardFeed
						userImage={{uri: 'https://i.pravatar.cc/100' }}
						userName={"M Haidar Hanif"}
						datePost={"9 February 2020 at 14.24"}
						caption={"Kamu tipe yang mana nih ???"}
						imagePost={require("./../assets/img/feed_1.png")}
					/>
					<CardFeed
						userImage={{uri: 'https://i.pravatar.cc/200' }}
						userName={"Reni Fitriani"}
						datePost={"9 February 2020 at 14.24"}
						caption={"Percaya ga kalau sy pernah melamar lebih dri 100 perusahaan tapi ga da yg nyantol? Itu dulu  8 tahun lalu. Mulai dari ikut jobfair, kirim aplikasi di aplikasi kerja sampe nyodorin diri langsung ke perusahaan. Ada yg ga dipanggil sama sekali sampe ada yg baru tes interview pertama, selebihnya ga da jawaban. Hopeless ga kira2? Engga biasa aja, sy berpikir untuk lebih dekat dg Allah, waktu itu mulai disemangatin dg solat tahajud dan duha dan intropeksi diri apa yg salah dalam diri? Padahal sy lulusan cumlaude. Prestasi lumayan. Banyak skil dan talenta yg bisa sy kontribusikan? ? Kembali lagi, Allah yg menggerakan Hati Manusia Tapi akhirnya saya berhasil diterima di salah satu bank syariah dg ikut program MT dan saat itu  ujiannya sampe 10 kali, panjang dan melelahkan. Tapi saya salah satu yg beruntung. Dengan berjalannya waktu, sy terus belajar dan meningkatkan kontribusi kepada masyarakat ta terasa sudah 2020. Dan kondisi saat ini berbeda jauh dri 8 tahun sebelumnya, skrg banyak yg menghubungi, mengajak gabung baik di bisnis bahkan a part of those companies di managerial level. Sy slalu membuka peluang apapun itu. Selagi bisa saling berkontribusi dg baik dan tidak mengecewakan. Sebuah pembelajaran buat rekan2 jobseeker, jgn menyerah, saatnya dekatkan diri pd Allah :)"}
					/>
					<CardFeed
						userImage={{uri: 'https://i.pravatar.cc/500' }}
						userName={"Rionald Soejanto"}
						datePost={"9 February 2020 at 14.24"}
						caption={"Congratz Herman Widjaja and Tokopedia for launching Tokopedia START 2020.. This program will be a great blessing for this country."}
						imagePost={require("./../assets/img/feed_2.png")}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default Feed;
