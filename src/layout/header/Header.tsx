import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import classes from './header.module.scss';

const Header = () => {
    const setActive = ({ isActive }: any): string =>
        [classes.link, isActive ? classes.linkActive : undefined].join(" ");

    return (
        <header>
            <Link to={'/'}>
                <img src={Logo} alt="Логотип CoSport" className='logo' />
                <span className='companyName'>CoSport</span>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            className={setActive}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'team'}
                            className={setActive}
                        >
                            Команды
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'events'}
                            className={setActive}
                        >
                            Мероприятия
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'users'}
                            className={setActive}
                        >
                            Пользователи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'settings'}
                            className={setActive}
                        >
                            Настройки
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button>Войти</button>
        </header>
    )
}

export default Header