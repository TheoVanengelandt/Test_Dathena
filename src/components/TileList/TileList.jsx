import './TileList.scss';

import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';

import { Loader } from '../Loader/Loader';

const TileList = ({ data, Title }) => {
    return (
        <React.Fragment>
            {data && (
                <React.Fragment>
                    <h2 className="tiles-list-title ">{Title}</h2>

                    <div className="tiles-container">
                        {data.map(items => (
                            <Card key={items.id || uuidv4()} className="single-tile">
                                <h2 className="title">{items.name}</h2>

                                {/* Display number of file if there at least on file */}
                                <p className="content">
                                    {items.total_docs ? `${items.total_docs} files` : 'No files found'}
                                </p>
                            </Card>
                        ))}
                    </div>
                </React.Fragment>
            )}
            {!data && <Loader />}
        </React.Fragment>
    );
};

TileList.propTypes = {
    data: PropTypes.array,
    Title: PropTypes.string,
};

TileList.defaultProps = {
    data: [],
    Title: '',
};

export { TileList };
