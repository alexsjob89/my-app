import React, { Component } from 'react'
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'

class App extends Component {
    render() {
        return ( <
            div className = "App" >

            <
            Greet name = 'Bruce'
            heroName = 'batman' >
            <
            p > thi is children props < /p></Greet >
            <
            Greet name = 'Clark'
            heroName = 'superman' > < button > action < /button> <
            /Greet > <
            Greet name = 'Diana'
            heroName = 'wonder woman' / >

            <
            /div>
        );
    }
}

export default App;