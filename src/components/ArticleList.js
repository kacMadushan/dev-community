import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    const users = props.users;
    return (
        <div className="article-list">
            {
                props.articles.map((article) => <Article key={article.id} {...article} users={users} />)
            }
        </div>
    );
};

export default ArticleList;