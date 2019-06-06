import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Footer } from '../components/Layout';
import ArticleList from '../components/ArticleList';
import UserList from '../components/UserList';

const HomePage = (props) => {
    return (
        <div>
            <Header />
            <Container>
                <div className="row">
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-6">
                        <ArticleList {...props} />
                    </div>
                    <div className="col-sm-3">
                        <UserList {...props} />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(HomePage);