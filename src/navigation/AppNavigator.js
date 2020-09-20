import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Counter from '../screens/Counter';
import 'react-native-gesture-handler';
import DashboardScreen from '../screens/dashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';



function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button title="Go to Details" onPress={() => navigation.navigate({name:'Details', key:DetailsScreen })} />
		</View>
	);
}

function DetailsScreen({navigation}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Button title="Go to homes" onPress={() => navigation.navigate({ name: 'Dash', key: DashboardScreen })} />
		</View>
	);
}

const Stack = createStackNavigator();

export class AppNavigator extends Component {
// define router
    render() {
        return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Dash" headerMode="none">
					<Stack.Screen name="Dash" component={DashboardScreen} />
					<Stack.Screen name="Details" component={DetailsScreen} />
					<Stack.Screen name="SignIn" component={SignInScreen} />
					<Stack.Screen name="SignUp" component={SignUpScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}



export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)