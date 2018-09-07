import * as React from 'react';
import { render } from 'react-dom';
import * as Moment from 'moment';
import { ParticlesContainer } from './components/particles-container';
import { TextContainer } from './components/text-container';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ParticlesContainer />
                <TextContainer />
            </React.Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));