import React from 'react'
import { Box, SvgIcon } from '@mui/material';
import RegistryForm from '../parts/registryForm/RegistryForm';
import classes from './registryPage.module.scss';
import U from '../../../../assets/img/U.svg';

const RegistryPage = () => {
    return (
        <section className={classes.registryPage}>
            <Box className={classes.registryPageText}>
                <h1>Присоединяйся к команде и организуй совместные занятия спортом.</h1>
                <p>Наш сервис поможет найти место и собрать команду единомышленников для занятий.</p>
            </Box>
            <div className={classes.registryPageForm}>
                <RegistryForm />
            </div>
        </section>
    )
}

export default RegistryPage;