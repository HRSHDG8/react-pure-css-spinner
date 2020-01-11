import React from 'react';

class App extends React.Component {
    state = {
        count: 0,
        myName: 'IGF'
    };
    changeMyName() {
        this.setState(state => {
            state.myName = 'Harsh';
            return state;
        })
    }
    incrementCount() {
        this.setState(state => {
            state.count = ++state.count;
            return state;
        });
        console.log('Its done and dusted', this.state);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.incrementCount()}> Clicked - {this.state.count}</button>
                <button onClick={() => this.changeMyName()}> Clicked - {this.state.myName}</button>
            </div>
        )
    }
}
export default App;