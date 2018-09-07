import * as React from 'react';
import Particles from 'react-particles-js';
export class ParticlesContainer extends React.PureComponent {

    render() {
        return (
            <div className="particles-container__wrapper">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 30
                            },
                            color: {
                                value: '#FFFFFF'
                            },
                            line_linked: {
                                enable: true,
                                opacity: .4
                            },
                            opacity: {
                                value: .4
                            },
                            size: {
                                value: 1
                            },
                            move: {
                                speed: 1
                            }
                        }
                    }}
                    className="particles-container__particles"
                    canvasClassName="particles-container__canvas"/>
            </div>
        );
    }

}