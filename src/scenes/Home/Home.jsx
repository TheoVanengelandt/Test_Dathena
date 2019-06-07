import './home.scss';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { MainBar } from '../../components/MainBar';

const Home = () => {
    return (
        <div>
            <MainBar content="My Dashbord" shadow toUpperContent />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

const EnhancedHome = withRouter(Home);

export { EnhancedHome as Home };
