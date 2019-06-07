import * as log from 'loglevel';

const setupLogger = () => {
    log.setDefaultLevel(log.levels.SILENT);
    if (process.env.NODE_ENV === 'development') {
        log.setLevel(log.levels.DEBUG);
        window.pstLog = log;
    }
};

export { log, log as logger, setupLogger };
