import './loadingPage.scss';

import React from 'react';

import { Loader } from '../../components/Loader/Loader';

const LoadingPage = () => {
    return (
        <div className="app-loading-page">
            <div className="content-container">
                <Loader />
            </div>
        </div>
    );
};

LoadingPage.propTypes = {};

export { LoadingPage };
