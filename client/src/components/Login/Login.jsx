import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router";

import {loginAxios} from "../../axios/login";

export const Login = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/')
        }
    })

    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState(null);


    const onSubmit = async (fields) => {
        try {
            const user = await loginAxios(fields);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    return (
        <div className="container text-white">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mt-4">
                <div className="col-md-6">
                    <label
                        htmlFor="inputEmail4"
                        style={{ color: "black" }}
                        className="form-label"
                    >
                        E-mail:
                    </label>
                    <input
                        type="email"
                        {...register("user_email")}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label
                        htmlFor="inputPassword4"
                        style={{ color: "black" }}
                        className="form-label"
                    >
                        Введите пароль:
                    </label>
                    <input
                        type="password"
                        {...register("user_password")}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-12 mt-4 d-flex mb-4 align-items-center">
                    <button type="submit" className="btn btn-dark mb">
                        Войти
                    </button>
                    <div className="container" style={{ color: "black" }}>
                        {message}
                    </div>
                </div>
            </form>
        </div>
    );
};
