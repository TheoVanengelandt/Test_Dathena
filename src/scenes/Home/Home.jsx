import './home.scss';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { MainBar } from '../../components/MainBar';

import confidentialityData from '../../data/confidentiality_data.json';
import doctypeData from '../../data/doctype_data.json';
import languageData from '../../data/language_data.json';
import { TileList } from '../../components/TileList';

const Home = () => {
    return (
        <div>
            <MainBar content="My Dashbord" shadow toUpperContent />
            <TileList data={confidentialityData} Title="Confidentiality data" />
            <TileList data={doctypeData} Title="Doctype data :" />
            <TileList data={languageData} Title="Language data :" />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

const EnhancedHome = withRouter(Home);

export { EnhancedHome as Home };
