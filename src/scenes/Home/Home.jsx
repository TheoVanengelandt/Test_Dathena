import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = () => {
    return <div>TESTING</div>;
};

Home.propTypes = {};

Home.defaultProps = {};

const EnhancedHome = withRouter(Home);

export { EnhancedHome as Home };
