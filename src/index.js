import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './pages/App';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import 'antd/dist/antd.css';

import reducers from "./redux/reducers";

const store = createStore( combineReducers( reducers ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    );

render(App);

if (module.hot) module.hot.accept('./pages/App', () => render(App));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
