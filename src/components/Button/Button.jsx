import './button.scss';

import MuiButton from '@material-ui/core/Button';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Loader } from '../Loader/Loader';

const Button = ({
    blue,
    grey,
    mango,
    azure,
    red,
    transparent,
    black,
    shadow,
    noTextTransform,
    loading,
    disabled,
    whiteBg,
    classes: {
        root: customRootClass = '',
        outlined: customOutlinedClass = '',
        disabled: customDisabledClass = '',
        label: customLabelClass = '',
        ...otherClasses
    },
    ...rest
}) => {
    const classes = {
        root: classnames({
            'app-button': true,
            root: true,
            blue,
            grey,
            mango,
            azure,
            transparent,
            black,
            red,
            shadow,
            noTextTransform,
            whiteBg,
            [customRootClass]: customRootClass,
        }),
        outlined: classnames({
            outlined: true,
            [customOutlinedClass]: customOutlinedClass,
        }),
        disabled: classnames({
            disabled: true,
            [customDisabledClass]: customDisabledClass,
        }),
        label: classnames({
            label: true,
            loading,
            [customLabelClass]: customLabelClass,
        }),
        ...otherClasses,
    };

    if (loading)
        return (
            <MuiButton classes={classes} disabled={disabled} {...rest}>
                <Loader diabled={disabled} medium />
            </MuiButton>
        );

    return <MuiButton classes={classes} disabled={disabled} {...rest} />;
};

Button.propTypes = {
    variant: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
        label: PropTypes.string,
        outlined: PropTypes.string,
        contained: PropTypes.string,
    }),
    blue: PropTypes.bool,
    grey: PropTypes.bool,
    mango: PropTypes.bool,
    azure: PropTypes.bool,
    red: PropTypes.bool,
    transparent: PropTypes.bool,
    noTextTransform: PropTypes.bool,
    /** Style the bg as black */
    black: PropTypes.bool,
    /** Show a loader inside the button */
    loading: PropTypes.bool,
};

Button.defaultProps = {
    classes: {
        root: '',
        label: '',
        outlined: '',
        contained: '',
    },
    blue: false,
    grey: false,
    red: false,
    mango: false,
    azure: false,
    transparent: false,
    noTextTransform: false,
    black: false,
    loading: false,
};

export { Button };
