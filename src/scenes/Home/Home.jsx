import './home.scss';
import 'chart.js';

import PropTypes from 'prop-types';
import React from 'react';
import { LineChart, PieChart } from 'react-chartkick';
import Clock from 'react-clock';
import Draggable from 'react-draggable';

import { Button } from '../../components/Button/Button';
import { MainBar } from '../../components/MainBar';
import { TileList } from '../../components/TileList/TileList';
import confidentialityData from '../../data/confidentiality_data.json';
import doctypeData from '../../data/doctype_data.json';
import languageData from '../../data/language_data.json';
import { enhanceHome } from './enhcanceHome';

const Home = ({ date, hideClock, setHideClock, showDetails, setShowDetails }) => {
    const options = names => ({
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: names,
        },
    });

    const series = data => [
        {
            name: 'series-1',
            data: data,
        },
    ];

    return (
        <div>
            <MainBar content="MY DASHBOARD" shadow toUpperContent />
            {hideClock && (
                <Button
                    onClick={() => setHideClock(!hideClock)}
                    classes={{ root: 'show-button', label: 'clock-title ' }}
                >
                    Show Clock
                </Button>
            )}

            {!hideClock && (
                <Draggable>
                    <div className="clock-container">
                        <div className="clock-title">
                            <span>Mouvable clock</span>
                            <Button onClick={() => setHideClock(!hideClock)}>X</Button>
                        </div>

                        <Clock value={date} className="clock-item" />
                    </div>
                </Draggable>
            )}

            <div className="main-container">
                <div className="single-container">
                    <h2 className="title">Confidentiality data :</h2>
                    <PieChart data={confidentialityData.map(item => [item.name, item.total_docs])} />
                </div>

                <div className="single-container">
                    <h2 className="title">Doctype data :</h2>
                    <PieChart data={doctypeData.map(item => [item.name, item.total_docs])} />
                </div>
            </div>

            <div className="single-last-container">
                <h2 className="title">Language data :</h2>
                <LineChart data={languageData.map(item => [item.name, item.total_docs])} />

                {!showDetails ? (
                    <Button onClick={() => setShowDetails(!showDetails)} classes={{ root: 'show-details-button' }}>
                        Show Details
                    </Button>
                ) : (
                    <React.Fragment>
                        <Button onClick={() => setShowDetails(!showDetails)} classes={{ root: 'show-details-button' }}>
                            Hide Details
                        </Button>
                        <TileList data={languageData} />
                    </React.Fragment>
                )}
            </div>
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
