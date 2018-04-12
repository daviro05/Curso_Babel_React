import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Raffe',
            nombre: 'Rafa',
            apellidos: 'Martin',
            age: 28,
            genero: ''
        }
    }

    /*onUsernameChange = username => {
        this.setState({username})
    }*/

    onInputChange = (key, value) => {
        this.setState({[key]: value})
    }

    isOld = () => {
        return this.state.age > 28
    }

    render() {
        const { username, nombre, age, apellidos, genero } = this.state
        const message = `Username: ${username}<br>
                         Nombre: ${nombre}<br>
                         Apellidos: ${apellidos}<br>
                         Edad: ${age}<br>
                         Género: ${genero}`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                {this.isOld() && 'Eres viejo!'}
                <WonderForm
                    //onUsernameChange={this.onUsernameChange}
                    onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default App;
