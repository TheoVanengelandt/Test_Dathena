import Loadable from 'react-loadable';

import { AsyncPageLoading } from '../../scenes/AsyncPageLoading/AsyncPageLoading';

const DELAY_MS = 200;

const withAsyncLoading = asyncPageImport =>
    Loadable({
        loader: asyncPageImport,
        loading: AsyncPageLoading,
        delay: DELAY_MS,
    });

export { withAsyncLoading };
