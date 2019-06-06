import React from 'react';
import Avatar from './Avatar';

const User = ({ name, avatar }) => {
    return (
        <React.Fragment>
            <li className="list-group-item list-of-user">
                <Avatar avatar={avatar} name={name} />
                <div className="user-info">
                    <h5 className="user-name">{name}</h5>
                    <button className="follow-btn">Follow +</button>
                </div>
            </li>
        </React.Fragment>
    );
};

export default User;