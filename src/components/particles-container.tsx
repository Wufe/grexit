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
                                value: 100
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
                                speed: 2
                            }
                        },
                        fps_limit: 28
                    }}
                    className="particles-container__particles"
                    canvasClassName="particles-container__canvas"/>
            </div>
        );
    }

}