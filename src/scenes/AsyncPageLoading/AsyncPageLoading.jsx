import './asyncPageLoading.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../components/Button/Button';
import { logger } from '../../services/logger/log';
import { LoadingPage } from '../LoadingPage/LoadingPage';

const AsyncPageLoading = ({ error, timedOut, retry }) => {
    if (error || timedOut) {
        logger.error(error);

        return (
            <div className="app-async-loading-page">
                <div className="content-container">
                    <div className="info-container">
                        <div className="message">
                            <FormattedMessage
                                id="app.load.error.message"
                                defaultMessage={`L'application a rencontré une erreur pendant son chargement.
                                Cliquez sur le bouton ci-dessous pour réessayer`}
                            />
                        </div>
                        <div className="retry-container">
                            <Button noTextTransform mango className="apl-button" onClick={retry}>
                                <FormattedMessage id="app.load.error.button" defaultMessage="Réessayer" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <LoadingPage />;
};

AsyncPageLoading.propTypes = {
    /** The Error if the async loader failed  */
    error: PropTypes.object,
    /**
     * function() => void
     * Retries loading the component
     */
    retry: PropTypes.func,
    /** If the component import timed out */
    timedOut: PropTypes.bool,
    /** If the loader is past the delay specified */
    pastDelay: PropTypes.bool,
};

AsyncPageLoading.defaultProps = {
    error: undefined,
    retry: () => undefined,
    timedOut: false,
    pastDelay: false,
};

export { AsyncPageLoading };
