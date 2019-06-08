import { withRouter } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';

export const enhanceHome = compose(
    withRouter,
    withState('hideClock', 'setHideClock', false),
    lifecycle({
        componentDidMount() {
            setInterval(() => this.setState({ date: new Date() }), 1000);
        },
    })
);
