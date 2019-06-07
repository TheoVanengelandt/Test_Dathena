import { withAsyncLoading } from '../../router/withAsyncPageLoading/withAsyncPageLoading';

const LoadableHome = withAsyncLoading(async () => import('./Home').then(res => res.Home));

export { LoadableHome };
