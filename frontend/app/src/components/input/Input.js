import React from "react";
import './Input.scss'

function isInvalid ({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate
}

export const Input = (props) => {
    const cls = []
    const inputType = props.type || 'text'
    const htmlFor = `${props.type} - ${Math.random()}`
    const placeholder = props.placeholder
    const className = props.className
    const style2 = {
        fontFamily: 'Montserrat Alternates',
        fontStyle: 'normal',
        fontWeight:'400',
        fontSize: '12px',
        lineHeight: '24px',
        color: '#702431',
        marginLeft: '18px'
    }
    const style = {
        background: '#FBFBFB',
        border: '2px solid #2D2D2D',
        borderRadius: '100px',
        width: '100%',
        paddingLeft: '24px',
        marginBottom: '32px',
        height: '50px'      }

    return(
        <div className={cls.join(' ')}>
            {isInvalid(props) ? <span style={style2}>{props.errorMessage || 'Введите верное значение'}</span>: null}
            <input type = {inputType}
                    id={htmlFor}
                    value={props.value}
                    onChange = {props.onChange}
                    placeholder= {placeholder}
                    className={className}
                    style={style}

            />
        </div>
    )
}