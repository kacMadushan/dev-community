import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';

const UserList = (props) => {
    return (
        <div className="user-list">
            <ul className="list-group">
                {props.users.map((user) => <User key={user.userId} {...user} />)}
            </ul>
            <Link className="view-all-user">View All Users</Link>
        </div>
    );
};

export default UserList;