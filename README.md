# Create Android & iOS App with React Native

Setup App

	react-native init myApp

Instal Redux

	npm install --save react-redux redux

Create new folder named src & file name src/App.js

	import React, {Component} from 'react';
	import {View, Text} from 'react-native';
	import {Provider} from 'react-redux';
	import {createStore} from 'redux';

	class App extends Component {
		render() {
			return (
			<Provider store={createStore()}>
				<View>
				<Text>Hello!</Text>
				</View>
			</Provider>
			);
		}
	}

	export default App;

Remove content index.ios.js & index.android.js, instead bellow:

If we refresh screen will thrown an error "Expected the reducer to be a function"

So we need to create default reducers.

Creat new folder under src named reducers and file index.js under reducers folder.

	import {combineReducers} from 'redux';

	export default combineReducers({
	banana: () => []
	});

	import reducers from './reducers';

	<Provider store={createStore(reducers)}>

Refresh screen :)



