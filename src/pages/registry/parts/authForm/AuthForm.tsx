import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import classes from './authForm.module.scss';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import VkLogo from '../../../../assets/img/social/vk.png';
import GoogleLogo from '../../../../assets/img/social/google.png';
import FacebookLogo from '../../../../assets/img/social/facebook.png';

const errorMessage: { [key: string]: string } = {
    passwordLength: 'Пароль должен быть не менее 8 символов',
}

const AuthForm: React.FC = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
        alert(JSON.stringify(data));
        if (errors === undefined) {
            reset();
        }
    };

    return (
        <div className={classes.formGroup}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.input}>
                    <Controller
                        rules={{
                            required: true
                        }}
                        name='phoneOrEmail'
                        control={control}
                        render={({ field: { onChange, value = '' } }) => {
                            return <TextField
                                required
                                onChange={onChange}
                                type={value.indexOf('@') > 1 ? 'email' : 'text'}
                                value={value}
                                label='Телефон или E-mail' />
                        }}
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <Controller
                        rules={{
                            required: true,
                            minLength: {
                                value: 8,
                                message: errorMessage.passwordLength,
                            }
                        }}
                        name='password'
                        control={control}
                        render={({ field: { onChange, value = '' } }) => {
                            return <TextField
                                required
                                onChange={onChange}
                                value={value}
                                label='Пароль'
                                type='password'
                                error={errors.password !== undefined}
                                helperText={errors.password ? String(errors?.password?.message) : ''}
                            />
                        }}
                    />
                </FormControl>
                <Link
                    className={classes.rememberLink}
                    to={'/'}
                >
                    Забыли пароль?
                </Link>
                <Button
                    className={classes.submit}
                    type='submit'
                    variant='contained'
                >
                    Войти
                </Button>
            </form>
            <div className={classes.registryBlock}>
                <p>Еще не зарегистрированы?</p>
                <Link to={'/registration'} className={classes.regLink}>Регистрация</Link>
            </div>
            <div className={classes.social}>
                <p>Войти при помощи социальных сетей:</p>
                <div className={classes.socialGroup}>
                    <a
                        href="https://www.vk.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={VkLogo} alt="Vk Logo" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={FacebookLogo} alt="Facebook Logo" />
                    </a>
                    <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={GoogleLogo} alt='Google Logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;