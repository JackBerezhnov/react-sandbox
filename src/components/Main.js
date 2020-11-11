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

        function UserGreeting(props) {
            return <h1>Welcome back!</h1>;
        }

        function GuestGreeting(props) {
            return <h1>Please sign up.</h1>
        }

        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
        }

        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <Greeting isLoggedIn={true} />
            </div>
        );
    }
}

export default Main;