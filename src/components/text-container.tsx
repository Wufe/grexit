import * as React from 'react';
import * as Moment from 'moment';

interface ITextContainerState {
    text: string;
}

export class TextContainer extends React.Component<{}, ITextContainerState> {

    interval: number;

    constructor(props: {}) {
        super(props);
        this.updateText = this.updateText.bind(this);
        this.state = {
            text: `0 giorni 0 ore 0 minuti 0 secondi`
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateText);
    }

    componentWillUnmount() {
        if (this.interval)
            clearInterval(this.interval);
    }

    updateText() {
        const now = Moment.now();
        const then = Moment.default('28/09/2018 18:00:00', 'DD/MM/YYYY HH:mm:ss');
        this.setState({
            ...this.state,
            text: `${then.diff(now, 'days')} giorni ${then.diff(now, 'hours')%24} ore ${then.diff(now, 'minutes')%60} minuti ${then.diff(now, 'seconds')%60} secondi`
        })
    }

    render() {
        return (
            <div className="text-container__wrapper">
                <div className="text-container__align-text">
                    <div className="text-container__title">POTTOOO?!!??</div>
                    <div className="text-container__first-description">Mancano</div>
                    <div className="text-container__timer">{this.state.text}</div>
                    <div className="text-container__last-description">al lutto</div>
                </div>
            </div>
        );
    }
}