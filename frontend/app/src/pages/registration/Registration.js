import React, { useContext } from "react";
import './Registration.scss'
import Logo from '../../image/Logo_log.svg'
import { Input } from "../../components/input/Input";
import {Context} from '../../context/Context'

export const Registration = () => {
    const {renderInputsRegistration} = useContext(Context)
    return(
        <div className="background_color">
            <div className="contentDiv">
                <div className="background_image">
                    <div className="registration_background"></div>
                    <div className="login_content">
                        <div className="logo"><img src={Logo}></img></div>
                        <div className="inputs">
                            {renderInputsRegistration()}
                        </div>
                        <div className="forgot_remember">
                            <div className="remember">
                                <input className="checkbox" type="radio" id = "remember_me" name="emember_me"></input>
                                <label for = "remember_me" className="remember_label" >Я принимаю <span><a className="politic" href = '#'>Политику компании</a></span></label>
                            </div>
                        </div>
                        <div className="registration_btn">
                            <button className="registration_button">регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}