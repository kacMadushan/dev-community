import { users } from '../api/data'

const usersDefaultState = users;

export default (state = usersDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};