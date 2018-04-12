import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'
import Radio from './components/Radio'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <Input type="text" onChange={props.onInputChange} id="username" placeholder='username'/>
            <Input type="text" onChange={props.onInputChange} id="nombre" placeholder='nombre'/>
            <Input type="text" onChange={props.onInputChange} id="apellidos" placeholder='apellidos'/>
            <Input type="number" onChange={props.onInputChange} id="edad" placeholder='edad'/>
            <Radio 
                 name="genero" 
                 values={['hombre', 'mujer', 'otro']} 
                 onInputChange={props.onInputChange} />
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}