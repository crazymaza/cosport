import React from 'react'
import { NavLink } from 'react-router-dom'

const menu: Array<{ path: string, title: string }> = [
    { path: '/', title: 'Главная' },
    { path: 'sportground', title: 'Спортплощадки' },
    { path: 'teams', title: 'Команды' },
    { path: 'events', title: 'Мероприятия' },
    { path: 'users', title: 'Пользователи' },
    { path: 'settings', title: 'Настройки' },
]

const MainNavLink: React.FC<{ classes: any }> = ({ classes }) => {
    return (
        <>
            {menu.map(({ path, title }) => {
                return (<NavLink
                    key={path}
                    to={path}
                    className={classes}
                >
                    <span>{title}</span>
                </NavLink>)
            })}
        </>
    )
}

export default MainNavLink;
