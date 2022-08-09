import React from 'react'
import { Box } from '@mui/material';
import RegistryForm from '../parts/registryForm/RegistryForm';
import classes from './registryPage.module.scss';
import AuthForm from '../parts/authForm/AuthForm';
import { useLocation } from 'react-router-dom';

const RegistryPage = () => {
    const location = useLocation();
    return (
        <section className={classes.registryPage}>
            <Box className={classes.registryPageText}>
                <h1>Присоединяйся к команде и организуй совместные занятия спортом.</h1>
                <p>Наш сервис поможет найти место и собрать команду единомышленников для занятий.</p>
            </Box>
            <div className={classes.registryPageForm}>
                {location.pathname.endsWith('auth') ? <AuthForm /> : <RegistryForm />}
            </div>
        </section>
    )
}

export default RegistryPage;