import React from 'react';
import {Button, FormControl, TextField} from '@mui/material';
import classes from './registryform.module.scss';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useMutation} from "@apollo/client";
import {CREATE_USER} from "../../../../apollo/mutations/userMutation";
import LoadingButton from '@mui/lab/LoadingButton';

const errorMessage: { [key: string]: string } = {
    passwordLength: 'Пароль должен быть не менее 8 символов',
    passwordRepeat: 'Пароли не совпадают.',
};

const RegistryForm: React.FC = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
        watch
    } = useForm();

    const [setUser, { data, loading, error }] = useMutation(CREATE_USER);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = ({email, name, password, surname, phone}) => {
        setUser({
            // @ts-ignore
            "object": {
                "email": email,
                "name": name,
                "surname": surname,
                "phone": phone,
                "password": password,
                "gender": true,
                "isprofsportsman": false
            }
        });
            // .then((res) => {
            //     console.log(res);
            //     Number(res.data) && navigate("/", {replace: true})
            // })
            // .catch((err) => console.log(err));
        reset();
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
                    name='surname'
                    control={control}
                    render={({field: {onChange, value = ''}}) => {
                        return <TextField
                            required
                            onChange={onChange}
                            value={value}
                            label='Фамилия'/>
                    }}
                />
            </FormControl>
            <FormControl className={classes.input}>
                <Controller
                    rules={{
                        required: true
                    }}
                    name='name'
                    control={control}
                    render={({field: {onChange, value = ''}}) => {
                        return <TextField
                            required
                            onChange={onChange}
                            value={value}
                            label='Имя'/>
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
                    render={({field: {onChange, value = ''}}) => {
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
                    name='phone'
                    control={control}
                    render={({field: {onChange, value = ''}}) => {
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
                    render={({field: {onChange, value = ''}}) => {
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
                    render={({field: {onChange, value = ''}, fieldState: {error}}) => {
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
            <LoadingButton
                className={classes.submit}
                type='submit'
                variant='contained'
                loading={loading}
            >
                Зарегистрироваться
            </LoadingButton >
        </form>
    )
}

export default RegistryForm;