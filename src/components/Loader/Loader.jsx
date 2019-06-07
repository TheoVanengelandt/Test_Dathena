import './loader.scss';

import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const Loader = ({ disabled, colors, small, medium }) => {
    const classNames = colors.map(color =>
        classnames({
            dot: true,
            [`accent-${color}`]: true,
            disabled,
            small,
            medium,
        })
    );

    const loaderClassName = classnames({ loader: true, small, medium });

    return (
        <div className="loader-overlay">
            <div className={loaderClassName}>
                {classNames.map((className, index) => (
                    <div key={index} className={className} />
                ))}
            </div>
        </div>
    );
};

Loader.propTypes = {
    disabled: PropTypes.bool,
    colors: PropTypes.arrayOf(
        PropTypes.oneOf(['pink', 'orange', 'green', 'cyan ', 'blue', 'purple', 'mango', 'azure']).isRequired
    ),
    small: PropTypes.bool,
    medium: PropTypes.bool,
};

Loader.defaultProps = {
    disabled: false,
    colors: ['azure', 'azure', 'azure', 'azure', 'azure', 'azure'],
    small: false,
    medium: false,
};

export { Loader };
