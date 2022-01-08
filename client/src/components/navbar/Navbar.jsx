import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout } from "../../reducers/userReducer"
import './navbar.css'

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return <div className="navbar">
        <div className="navbar__logo"></div>
        <div className="navbar__header">MERN CLOUD</div>
        {!isAuth && <div className="navbar__login">
            <NavLink to="/login">
                Войти
            </NavLink>
        </div>}
        {!isAuth && <div className="navbar__registration">
            <NavLink to="/registration">
                Регистрация
            </NavLink>
        </div>}
        {isAuth && <div className="navbar__registration"
            onClick={()=>dispatch(logout())}
        >
                Выход
        </div>}
    </div>
}

export default Navbar
