import './TileList.scss';

import Card from '@material-ui/core/Card';
import React from 'react';

import PropTypes from 'prop-types';

const TileList = ({ data, Title }) => {
    return (
        <React.Fragment>
            <h1 className="tiles-list-title ">{Title}</h1>

            <div className="tiles-container">
                {data.map(items => (
                    <Card className="single-tile">
                        <h2 className="title">{items.name}</h2>

                        {/* Display number of file if there at least on file */}
                        <p className="content">{items.total_docs ? `${items.total_docs} files` : 'No files found'}</p>
                    </Card>
                ))}
            </div>
        </React.Fragment>
    );
};

TileList.propTypes = {
    data: PropTypes.object,
    Title: PropTypes.string,
};

TileList.defaultProps = {
    data: {},
    Title: '',
};

export { TileList };
