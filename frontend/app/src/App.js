import './App.scss';
import React from 'react';
import Layout from './components/layout/Layout';
import { Input } from './components/input/Input';
import { Context} from './context/Context';

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        email :{
          value: '',
          type: 'email',
          className: 'mail',
          placeholder: 'Почта',
          errorMessage: 'Введите корректную почту',
          valid: false,
          touched: false, 
          validation: {
            required: true,
            email: true
          },
        }, 
        password: {
          value: '',
          type: 'password',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          className: 'password',
          touched: false, 
          placeholder: 'Пароль',
          validation: {
            required: true,
            minLength: 6    
        }
      }
    },

    registrationControls: {
      login :{
        value: '',
        type: 'text',
        className: 'login',
        placeholder: 'Логин',
        errorMessage: 'Введите корректный логин',
        valid: false,
        touched: false, 
        validationRegistration: {
          required: true,
          minLength: 6
        }
        },
        email :{
          value: '',
          type: 'email',
          className: 'mail',
          placeholder: 'Почта',
          errorMessage: 'Введите корректную почту',
          valid: false,
          touched: false, 
          validationRegistration: {
            required: true,
            email: true
          }
          },
          Password :{
            value: '',
            type: 'password',
            className: 'password',
            placeholder: 'Пароль',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false, 
            validationRegistration: {
              required: true,
              minLength: 6,
            },
      }, 
      ReapitPassword: {
        value: '',
        type: 'password',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        className: 'password',
        touched: false, 
        placeholder: 'Повторите пароль',
        validationRegistration: {
          required: true,
          minLength: 6,
          reapit: false   
      }
    }

    
  }
}
}

onChangeHandler = (event, controlName) => {
  const formControls = {...this.state.formControls}
  const control = {...formControls[controlName]}
  control.value = event.target.value
  control.touched = true
  control.valid = this.validateControl(control.value, control.validation)
  formControls[controlName] = control
  this.setState({formControls})
}

onChangeHandlerRegistration = (event, controlName) => {
  const registrationControls = {...this.state.registrationControls}
  const control = {...registrationControls[controlName]}
  control.value = event.target.value
  control.touched = true
  control.valid = this.validateControl(control.value, control.validationRegistration)
  registrationControls[controlName] = control
  this.setState({registrationControls})
}
validateControl(value, validation) {
  if(!validation) {
    return true
  }

  let isValid = true
  if(validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  if(validation.email) {
    isValid = validateEmail(value) && isValid
  }

  if(validation.minLength) {
    isValid = value.length >= validation.minLength && isValid
  }

  return isValid
}

renderInputsRegistration = () => {
  return Object.keys(this.state.registrationControls).map((controlName, i)=> {
    const control = this.state.registrationControls[controlName]
    return(
      <Input
      key = {controlName + i}
      placeholder = {control.placeholder}
      type = {control.type}
      value = {control.value}
      className = {control.className}
      valid = {control.valid}
      touched = {control.touched}
      errorMessage = {control.errorMessage}
      shouldValidate = {true}
      onChange = {(event) => this.onChangeHandlerRegistration(event,controlName)}
      />
    )
  })
}

renderInputs = () => {
  return Object.keys(this.state.formControls).map((controlName, i)=> {
    const control = this.state.formControls[controlName]
    return(
      <Input
      key = {controlName + i}
      placeholder = {control.placeholder}
      type = {control.type}
      value = {control.value}
      className = {control.className}
      valid = {control.valid}
      touched = {control.touched}
      errorMessage = {control.errorMessage}
      shouldValidate = {true}
      onChange = {(event) => this.onChangeHandler(event,controlName)}
      />
    )
  })
}

  render(){
    return(
      <Context.Provider
      value = {
        {
          state: this.state,
          renderInputs: this.renderInputs,
          renderInputsRegistration: this.renderInputsRegistration
        }
      }>
        <Layout/>
      </Context.Provider>
    )
  }
}


export default App