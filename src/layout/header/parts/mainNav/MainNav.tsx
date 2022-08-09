import React from 'react'
import MainNavLink from '../MainNavLink';
import classes from './mainNav.module.scss';

export const MainNav = () => {
    const setActive = ({ isActive }: any): string =>
        [classes.link, isActive ? classes.linkActive : undefined].join(" ");

    return (
        <nav>
            <MainNavLink classes={setActive}/>
        </nav>
    )
}
