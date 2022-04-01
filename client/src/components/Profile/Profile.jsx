import React, { useRef } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileEditAxios, profileDeleteAxios } from '../../axios/profile';
import { useNavigate } from 'react-router';

function Profile(props) {
    const user = JSON.parse(localStorage.getItem('user')).data;

    const navigate = useNavigate();

    const [editStatus, setEditStatus] = useState(false);
    const [message, setMessage] = useState(null);

    const inputName = useRef();
    const inputEmail = useRef();

    async function editProfile() {
        const data = {
            user_name: inputName.current.value,
            user_email: inputEmail.current.value
        };

        try {
            const response = await profileEditAxios(data);
            console.log(response);

            // dispatch({ type: 'UPDATE_USER', payload: updatedUser })
            localStorage.clear();
            navigate('/');
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    async function deleteProfile() {
        try {
            const {
                response: { updatedUser }
            } = await profileDeleteAxios(data);
            // dispatch({ type: 'DELETE_USER'})
            navigate('/logout');
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    const point = localStorage.getItem('points');
    return (
        <div className="container text-body ">
            <h2>Profile</h2>
            {editStatus ? (
                <button onClick={editProfile}>Сохранить</button>
            ) : (
                <button onClick={() => setEditStatus(true)}>Изменить</button>
            )}
            <div className="container text-body  flex-column d-flex flex-wrap py-5 justify-content-center">
                <div className="d-flex text-body flex-column">
                    <h3>
                        Имя пользователя:{' '}
                        {editStatus ? (
                            <input
                                className="form-control form-control-lg"
                                ref={inputName}
                                type="text"
                                defaultValue={user.user_name}
                                aria-label=".form-control-lg example"
                            />
                        ) : (
                            <span className="badge text-body ">
                                {user.user_name}
                            </span>
                        )}{' '}
                    </h3>
                    <h3>
                        E-mail:
                        {editStatus ? (
                            <input
                                className="form-control form-control-lg"
                                ref={inputEmail}
                                type="text"
                                defaultValue={user.user_email}
                                aria-label=".form-control-lg example"
                            />
                        ) : (
                            <span className="badge text-body ">
                                {user.user_email}
                            </span>
                        )}
                    </h3>
                    <h3>
                        Дата регистрации:{' '}
                        <span className="badge text-body ">
                            {user.createdAt}
                        </span>
                    </h3>
                    <h3>
                        Ваше Очк0:
                        <span className="badge text-body">{point}</span>
                    </h3>
                </div>
                <div className="container">{message}</div>
            </div>
        </div>
    );
}

export default Profile;
