import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerAxios } from '../../axios/register';

export const Register = () => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState(null);

    const onSubmit = async (fields) => {
        try {
            console.log(fields);
            const { data } = await registerAxios(fields);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    return (
        <div className="container text-black">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mt-4">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        E-mail:
                    </label>
                    <input
                        type="email"
                        {...register('user_email')}
                        className="form-control"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Имя:
                    </label>
                    <input
                        type="text"
                        {...register('user_name')}
                        className="form-control"
                        required
                        pattern="[A-Za-z]\w+"
                        minLength="4"
                        title="Латинские буквы, цифры и _"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Введите пароль:
                    </label>
                    <input
                        type="password"
                        {...register('user_password')}
                        className="form-control"
                        required
                        minLength="4"
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Введите пароль еще раз:
                    </label>
                    <input
                        type="password"
                        {...register('user_password_repit')}
                        className="form-control"
                        required
                        minLength="4"
                        autoComplete="off"
                    />
                </div>
                <div className="col-12 mt-4 d-flex mb-4 align-items-center">
                    <button type="submit" className="btn btn-dark mb">
                        Зарегистрироваться
                    </button>
                    <div className="container">{message}</div>
                </div>
            </form>
        </div>
    );
};
