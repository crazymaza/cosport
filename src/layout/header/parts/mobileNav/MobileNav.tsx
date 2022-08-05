import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MainNavLink from '../MainNavLink';
import classes from './mobileNav.module.scss';

const MobileHeader = () => {
    const setActive = ({ isActive }: any): string =>
        [classes.link, isActive ? classes.linkActive : undefined].join(" ");
    return (
        <Menu
            right
            disableOverlayClick
            className={classes.menuWrapper}
            burgerButtonClassName={classes.bmBurgerButton}
            overlayClassName={classes.bmOverlay}
            itemListClassName={classes.bmItemList}
            crossButtonClassName={classes.bmCrossButton}
            burgerBarClassName={classes.bmBurgerBar}
            crossClassName={classes.bmCrossClass}
        >
             {<MainNavLink classes={setActive}/>}
                        <button>Войти</button>
        </Menu>
    )
}
export default MobileHeader;