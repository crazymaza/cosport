import React from 'react';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import classes from './registryform.module.scss';

const RegistryForm: React.FC = () => {
    return (
        <FormGroup className={classes.formGroup}>
            <FormControl className={classes.input}>
                <TextField label='Фамилия и имя' />
            </FormControl>
            <FormControl className={classes.input}>
                <TextField label='E-mail' type='email' />
            </FormControl>
            <FormControl className={classes.input}>
                <TextField label='Телефон' type='tel' />
            </FormControl>
            <FormControl className={classes.input}>
                <TextField label='Пароль' type='password' />
            </FormControl>
            <FormControl className={classes.input}>
                <TextField label='Подтверждение пароля' type='password' />
            </FormControl>
            <Button
                className={classes.submit}
                type='submit'
                variant='contained'
            >
                Зарегистрироваться
            </Button>
        </FormGroup>
    )
}

export default RegistryForm;