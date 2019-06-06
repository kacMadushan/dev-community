import React from 'react';

const Avatar = ({ avatar, name }) => {
    return (
        <div className="user-avatar">
            <img className="avatar" src={avatar} alt={name} />
        </div>
    );
};

export default Avatar;