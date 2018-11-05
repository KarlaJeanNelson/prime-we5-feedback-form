import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Material UI and css
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'
import deepOrange from '@material-ui/core/colors/deepOrange';
import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import 'typeface-karla';
import 'typeface-share-tech-mono';
import './index.css';

const initialState = {
	message: 'Welcome to Feedback Frenzy!',
	feeling: 0,
	understanding: 0,
	support: 0,
	comments: '',
	nextPage: '',
}

const feedbackApp = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_STATE':
			state.message = action.message;
			state.nextPage = action.nextPage;
			return state;
		case 'SET_FEELING':
			state.feeling = action.feeling;
			return state;
		case 'SET_UNDERSTANDING':
			state.understanding = action.understanding;
			return state;
		case 'SET_SUPPORT':
			state.support = action.support;
			return state;
		case 'SET_COMMENTS':
			state.comments = action.comments;
			return state;
		case 'CLEAR_STATE':
			state = undefined;
			state = initialState;
			return state;
		default:
			return state;
	}
}

const adminList = (state = [], action) => {
	if (action.type === 'LIST_FEEDBACK') {
		state = action.payload;
	}
	return state;
}

const store = createStore(
	combineReducers({
		feedbackApp,
		adminList
	}),
	applyMiddleware(logger)
)

const theme = createMuiTheme({
  palette: {
		primary: lightGreen,
		secondary: blue,
	},
	typography: {
		useNextVariants: true,
	},
	error: red[800],
  status: {
		danger: deepOrange,
		warning: amber.A400
  },
});

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();