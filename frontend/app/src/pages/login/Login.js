import React, { useContext } from "react";
import './Login.scss'
import Logo from '../../image/Logo_log.svg'
import {Context} from '../../context/Context'

export const Login = () => {
    const {renderInputs} = useContext(Context)
    return(
        <div className="background_color">
            <div className="contentDiv">
                <div className="background_image">
                    <div className="left_background"></div>
                    <div className="right_bacground"></div>
                    <div className="login_content">
                        <div className="logo"><img src={Logo}></img></div>
                        <div className="inputs">
                            {renderInputs()}
                        </div>
                        <div className="forgot_remember">
                            <div className="remember">
                                <input className="checkbox" type="radio" id = "remember_me" name="emember_me"></input>
                                <label for = "remember_me" className="remember_label" >Запомни меня</label>
                            </div>
                            <a href="#"><div className="forgot">
                                Забыли пароль?
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}