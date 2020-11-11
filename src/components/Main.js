import React, {Component} from 'react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), 
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    
    render() {

        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Main;