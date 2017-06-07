# Create Android & iOS App with React Native

## Setup App

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

## Authentication

	npm install --save firebase

If Error:

	npm ERR!     at Error (native) parent: 'firebase' }
	npm ERR!
	npm ERR! Please try running this command again as root/Administrator.

	npm ERR! Please include the following file with any support request:
	npm ERR!     E:\workspace\reactnative\studentApp\npm-debug.log
	npm ERR! code 1

Solution! Do it as Administrator priviledge (windows) or sudo (linux).

Go to firebase console:

* Create new project
* Click Auth (left handside)
* Click Setup sign in method
* Click Email & Password > Enable it > Save
* Click Web setup > copy > create componentWillMount method and paste it there.
* Change var with const

		componentWillMount() {
			const config = {
				...
				Paste here
				...
			};
			firebase.initializeApp(config);
		}

* import 

		import firebase from 'firebase';	

* Refresh screen make sure no error.

## Create Login Form

![login-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_481,w_488/v1496654762/loginform-responsibiltiy_s8rul7.png)

![](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_489,w_339/v1496655041/loginform-redux_pwst3s.png)

Create components directory & Copas common directory from previous project.

Inside components folder Create new file LoginForm.js

	import React, {Component} from 'react';
	import {Card} from './common';

	class LoginForm extends Component {
		render() {
			return (
				<Card>

				</Card>
			)
		}
	}

	export default LoginForm;

On App.js file import LoginForm

	import LoginForm from './components/LoginForm'

Update App component to insert LoginForm:

	<Provider store={createStore(reducers)}>
		<LoginForm />
	</Provider>	

LoginForm.js import:

	import {..., CardSection, Input, Button}

Update LoginForm:

	class LoginForm extends Component {
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label="Email"
							placeholder="email@mail.com" 
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry 
							label="Password"
							placeholder="password"
						/>
					</CardSection>

					<CardSection>
						<Button>
							Login 
						</Button>
					</CardSection>
				</Card>
			);
		}
	}		

![login-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_218,w_300/v1496668206/loginform_in0a44.png)

## Handling form update with Action Creator

![redux-handling-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_440,w_430/v1496669405/redux-handling-login-form_r9xkfe.png)

Update the code:

	onChangeText={this.onEmailChange.bind(this)}

Create method for that event handler:

	onEmailChange(text) {

	}

Inside of there we going to call action creator, so create new folder & file src/actions/index.js :

Create action creator :

	export const emailChanged = (text) => {
		inside...
	}

Inside there return an **object** of **action**

	export const emailChanged = (text) => {
		return {
			type: 'email_changed',
			payload: text
		}
	}	

Back to LoginForm.js :

	import { connect } from 'react-redux';

import action creator:

	import { emailChanged } from '../actions';

at the bottom hooked up action creator with connect helper:

	export default connect()(LoginForm)

Add argument, for first argument we dont have mapStateToProps function yet

	export default connect(null, .. )(LoginForm)

and 2nd argument is action creator that we want bind to the component.

	export default connect(null, {emailChanged} )(LoginForm);

Because we wire up action creator we now have action to props inside of component emailChanged:

	this.props.emailChanged(text);

	onEmailChange(text) {
    this.props.emailChanged(text);
  }

Next we need to reducers to receive and catch emailChange action, create new file under reducers named AuthReducer.js

Update reducers/index.js to wire up that new reducers:

	import AuthReducer from './AuthReducer';

	export default combineReducers({
		auth: AuthReducer
	});

Update AuthReducer.js, type boiler plate for every reducers:

	export default (state = INITIAL_STATE, action) => {
		switch(action.type) {
			default:
				return state;
		}
	};

Next to remember never retur undefined to reducer, because first time start is run and return default state. So create variable INITIAL_STATE:

	const INITIAL_STATE = { email: '' }

become:

	export default (state = INITIAL_STATE, action) => {
		switch(action.type) {
			default:
				return state;
		}
	};	

110 next





