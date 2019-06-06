import React from 'react';
import Avatar from './Avatar';

const ArticleHead = ({ avatar, name, title }) => {
    return (
        <React.Fragment>
            <Avatar avatar={avatar} name={name} />
            <div className="article-headline">
                <h3 className="article-title">{title}</h3>
                <ul className="list-inline">
                    <li className="list-inline-item">{name}</li>
                    <li className="list-inline-item"></li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default ArticleHead;