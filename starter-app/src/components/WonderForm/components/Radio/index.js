import React from 'react'

class Radio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values: props.values,
            activeValue: props.defaultR
        }
    }

    onValueChange = e => {
        const value = e.target.value
        this.setState({
            activeValue: value
        })
        this.props.onInputChange(this.props.name, value);
    }

    render() {
        const { values, activeValue} = this.state
        const { defaultR, name} = this.props

        return (
            <div>
                {values.map((value,i) =>{
                    return (
                        <span>
                            <label htmlFor=''>{value}</label>
                        <input 
                            type='radio'
                            name={this.props.name}
                            key={i}
                            value={value} 
                            checked={value === activeValue}
                            onChange={this.onValueChange}
                        />
                    </span>
                    )
                })}
            </div>
        )

    }
}

export default Radio;