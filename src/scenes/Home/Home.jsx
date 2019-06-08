import './home.scss';

import PropTypes from 'prop-types';
import React from 'react';
import Clock from 'react-clock';
import Draggable from 'react-draggable';

import { Button } from '../../components/Button/Button';
import { MainBar } from '../../components/MainBar';
import { TileList } from '../../components/TileList';
import confidentialityData from '../../data/confidentiality_data.json';
import doctypeData from '../../data/doctype_data.json';
import languageData from '../../data/language_data.json';
import { enhanceHome } from './enhcanceHome';

const Home = ({ date, hideClock, setHideClock }) => {
    return (
        <div>
            <MainBar content="My Dashbord" shadow toUpperContent />
            {hideClock && (
                <Button onClick={() => setHideClock(false)} classes={{ root: 'show-button', label: 'clock-title ' }}>
                    Show Clock
                </Button>
            )}

            {!hideClock && (
                <Draggable>
                    <div className="clock-container">
                        <div className="clock-title">
                            <span>Mouvable clock</span>
                            <Button onClick={() => setHideClock(true)}>X</Button>
                        </div>

                        <Clock value={date} />
                    </div>
                </Draggable>
            )}

            <TileList data={confidentialityData} Title="Confidentiality data :" />
            <TileList data={doctypeData} Title="Doctype data :" />
            <TileList data={languageData} Title="Language data :" />
        </div>
    );
};

Home.propTypes = {
    value: PropTypes.string,
};

Home.defaultProps = {
    value: '',
};

const EnhancedHome = enhanceHome(Home);

export { EnhancedHome as Home };
