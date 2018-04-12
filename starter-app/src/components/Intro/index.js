import React, { Component } from 'react'

class Intro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: props.message
        }
    }

     componentWillReceiveProps(nextProps) {
         this.setState({
             message: nextProps.message
         })
     }

    render() {
        const { message } = this.state

        return (
            <p className="App-intro" dangerouslySetInnerHTML={{ __html: message }}
            style={{
                color: 'white',
                backgroundColor: 'black'
            }}
            />
/*             <p className="App-intro">
                {message}
            </p> */
        );
    }
}

export default Intro;