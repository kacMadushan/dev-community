import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configurStore from './store/configurStore';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configurStore();
//console.log(store.getState());

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
