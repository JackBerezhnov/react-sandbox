import React, {Component} from 'react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    
    render() {

        function handleClick(e) {
            e.preventDefault();
            console.log('This button was clicked');
        }


        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={handleClick}>Click me!</button>
            </div>
        );
    }
}

export default Main;