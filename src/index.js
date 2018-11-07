import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import axios from 'axios';

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
import './index.css';

const feedbackApp = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_HEADER':
			state.buttonText = action.buttonText;
			state.buttonPath = action.buttonPath;
			return state;
		case 'SET_DATE':
			state.date = action.date;
			state.submitted = 0;
			return state;
		case 'UPDATE_FEEDBACK':
			state[action.key] = action.value;
			state.submitted = action.submitted || 0;
			return state;
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
			state = {};
			state.submitted = action.submitted || 0;
			return state;
		default:
			return state;
	}
}

const adminList = (state = [], action) => {
	switch (action.type) {
		case 'LIST_FEEDBACK':
			state = action.payload;
			return state;
		default:
			return state;
	}
}

const store = createStore(
	combineReducers({
		feedbackApp,
		adminList,
	}),
	applyMiddleware(logger)
)

const theme = createMuiTheme({
  palette: {
		primary: blue,
		secondary: {
			main: lightGreen[500],
		},
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