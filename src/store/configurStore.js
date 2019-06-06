import { createStore, combineReducers } from 'redux';
import articlesReducer from '../reducers/articles';
import usersReducer from '../reducers/users';

export default () => {
    const store = createStore(
        combineReducers({
            articles: articlesReducer,
            users: usersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};