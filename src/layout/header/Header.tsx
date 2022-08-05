import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import classes from './header.module.scss';
import MobileHeader from './parts/mobileNav/MobileNav';
import { MainNav } from './parts/mainNav/MainNav';

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <header>
            <Link className={classes.logoWrapper} to={'/'}>
                <img src={Logo} alt="Логотип CoSport" className={classes.logo} />
                <span className={classes.companyName}>CoSport</span>
            </Link>
            {
                matches ? <MobileHeader />
                    : <>
                        <MainNav />
                        <button>Войти</button>
                    </>
            }
        </header>
    )
}

export default Header