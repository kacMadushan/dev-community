import { articles } from '../api/data';

const articlesDefaultState = articles;

export default (state = articlesDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};