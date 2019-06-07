import './MainBar.scss';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MainBar = ({ content, shadow, toUpperContent }) => {
    const MainBarClassName = classnames({ 'mainbar-container': true, shadow });
    const ContentClassName = classnames({ 'nav-title': true, toUpperContent });

    return (
        <div className={MainBarClassName}>
            <p className={ContentClassName}>{content}</p>
        </div>
    );
};

MainBar.propTypes = {
    content: PropTypes.node.isRequired,
    text: PropTypes.string,
};

MainBar.defaultProps = {
    text: '',
};

export { MainBar };
