import React from 'react';
import ArticleHead from './ArticleHead';

const Article = ({ body, title, userById, users }) => {
    const articleHead = users.map((user) => userById === user.userId ? <ArticleHead key={user.userId} title={title} {...user} /> : null);
    return (
        <div className="article">
            <div>
                {articleHead}
                <p className="article-body">{body.substring(0, 199) + '...'}</p>
            </div>
        </div>
    );
};
 
export default Article;