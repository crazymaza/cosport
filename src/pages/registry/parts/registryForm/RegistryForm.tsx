import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import classes from './registryform.module.scss';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

const errorMessage: { [key: string]: string } = {
    passwordLength: 'Пароль должен быть не менее 8 символов',
    passwordRepeat: 'Пароли не совпадают.',
}

const RegistryForm: React.FC = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        watch
    } = useForm();

    let navigate = useNavigate();
  let location = useLocation();

//   let from = location?.state?.from?.pathname || "/";

    const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
        alert(JSON.stringify(data));
        if (errors === undefined) {
            reset();
        }
    };

    return (
        <form
            className={classes.formGroup}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormControl className={classes.input}>
                <Controller
                    rules={{
                        required: true
                    }}
                    name='fio'
                    control={control}
                    render={({ field: { onChange, value = '' } }) => {
                        return <TextField
                            required
                            onChange={onChange}
                            value={value}
                            label='Фамилия и имя' />
                    }}
                />
            </FormControl>
            <FormControl className={classes.input}>
                <Controller
                    rules={{
                        required: true
                    }}
                    name='email'
                    control={control}
                    render={({ field: { onChange, value = '' } }) => {
                        return <TextField
                            required
                            onChange={onChange}
                            value={value}
                            label='E-mail'
                            type='email'
                        />
                    }}
                />

            </FormControl>
            <FormControl className={classes.input}>
                <Controller
                    name='tel'
                    control={control}
                    render={({ field: { onChange, value = '' } }) => {
                        return <TextField
                            onChange={onChange}
                            value={value}
                            label='Телефон'
                            type='tel'
                        />
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
            <FormControl className={classes.input}>
                <Controller
                    rules={{
                        required: true,
                        validate: (val: string) => {
                            if (val !== watch('password')) {
                                return errorMessage.passwordRepeat
                            }
                        }
                    }}
                    name='passwordRepeat'
                    control={control}
                    render={({ field: { onChange, value = '' }, fieldState: { error } }) => {
                        return <TextField
                            required
                            onChange={onChange}
                            value={value}
                            label='Подтверждение пароля'
                            type='password'
                            error={error !== undefined}
                            helperText={error ? error?.message : ''}
                        />
                    }}
                />
            </FormControl>
            <Button
                className={classes.submit}
                type='submit'
                variant='contained'
            >
                Зарегистрироваться
            </Button>
        </form>
    )
}

export default RegistryForm;