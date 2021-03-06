import React, { useState } from "react"
import { registration } from "../../actions/user"
import Input from "../input/Input"
import './authorization.css'

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div className="authorization">
        <div className="authorization__header">Регистрация</div>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введите email' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' />
        <button
            className="authorization_btn"
            onClick={() => registration(email, password)}
        >
            Зарегистрироваться
        </button>
    </div>
}

export default Registration
