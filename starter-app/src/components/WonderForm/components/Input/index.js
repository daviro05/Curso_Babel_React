import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    onValueChange = e => {
        let value = e.target.value
        const { onChange, type, id, placeholder } = this.props
        if(id === 'username'){
            onChange('username',value)
        }
        else if(id === 'nombre'){
            onChange('nombre',value)
        }
        else if(id === 'apellidos'){
            onChange('apellidos',value)
        }
        else if(type === 'radio'){
            onChange('genero',value)
        }
        else{
            onChange('age',value)
        }
        this.setState({inputValue: value})
    }

    render() {
        const { inputValue } = this.state

        return (
            <input 
            type={this.props.type} 
            onChange={this.onValueChange}
            //onClick={e => alert('Hola')} 
            value={inputValue} 
            //value='hola'
            placeholder={this.props.placeholder}/>
        )
    }
}

export default Input;