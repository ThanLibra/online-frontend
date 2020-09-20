import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const DashboardScreen = ({ navigation }) => {
	return (
		<View style={style.container}>
			<View style={style.header}>
				<Animatable.Image
					animation="bounceIn"
					source={require('../assets/edu.png')}
					style={style.logo}
					resizeMode="stretch"
				></Animatable.Image>
			</View>
			<Animatable.View style={style.footer} animation="fadeInUpBig">
				<Text style={style.title}>education for children.</Text>
				<Text style={style.text}>Getting start!</Text>
				<View style={style.button}>
					<TouchableOpacity
						style={style.signIn}
						onPress={() => {
							navigation.navigate('SignIn');
						}}
					>
						<LinearGradient colors={['#08d4c4', '#01ab9d']} style={style.signIn}>
							<Text style={style.textSign}>Getting start!</Text>
							<MaterialIcons name="navigate-next" color="#fff" size={20}></MaterialIcons>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default DashboardScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#009387',
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30,
	},
	logo: {
		width: height_logo,
		height: height_logo,
	},
	title: {
		color: '#05375a',
		fontSize: 30,
		fontWeight: 'bold',
	},
	text: {
		color: 'grey',
		marginTop: 5,
	},
	button: {
		alignItems: 'flex-end',
		marginTop: 30,
	},
	signIn: {
		width: 150,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		flexDirection: 'row',
	},
	textSign: {
		color: 'white',
		fontWeight: 'bold',
	},
});
