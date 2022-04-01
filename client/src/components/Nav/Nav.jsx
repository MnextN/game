import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { logoutAxios } from '../../axios/logout';

function Nav(props) {
    const navigate = useNavigate();

    const logout = async () => {
        const data = await logoutAxios();
        localStorage.clear();
        navigate(data.data.url);
    };

    const loggedUser = localStorage.getItem('user');

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    СВОЯ ИГРА
                </NavLink>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li>
                            <NavLink className="nav-item nav-link" to="/">
                                Главная
                            </NavLink>
                        </li>
                        {loggedUser && (
                            <>
                                <li>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/game">
                                        Игра
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/profile">
                                        Профиль
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {!loggedUser && (
                            <>
                                <li>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/register">
                                        Регистрация
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/login">
                                        Войти
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {loggedUser && (
                            <li>
                                <span
                                    style={{ cursor: 'pointer' }}
                                    className="nav-item nav-link"
                                    onClick={logout}
                                    to="/">
                                    Выйти
                                </span>
                            </li>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
