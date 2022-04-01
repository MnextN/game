import React, { useRef } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {profileEditAxios, profileDeleteAxios} from "../../axios/profile";


function Profile(props) {

  const { user } = useSelector(state => state.usersReducer)
  // const dispatch = useDispatch()

  const [editStatus, setEditStatus] = useState(false);
  const [message, setMessage] = useState(null);
  
  const inputName = useRef();
  const inputEmail = useRef();
  
  // const user = {
  //   user_name: 'Anya',
  //   user_email: 'anya@anya.ru',
  //   createdAt: '31.03.2022',
  //   user_score: 300,
  // }

  async function editProfile() {

    const data = {
      user_name: inputName.current.value,
      user_email: inputEmail.current.value,
    }

    try {
      const { response: { updatedUser }, } = await profileEditAxios(data);

      // dispatch({ type: 'UPDATE_USER', payload: updatedUser })
      navigate('/logout');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }

  async function deleteProfile() {

    try {
      const { response: { updatedUser }, } = await profileDeleteAxios(data);
      // dispatch({ type: 'DELETE_USER'})
      navigate('/logout');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }


return (
<>
  <h2>Profile</h2>

   {editStatus ? 
   <button onClick={editProfile}>Сохранить</button> : 
   <button onClick={() => setEditStatus(true)}>Изменить</button>} 

   <button onClick={deleteProfile}>Удалить свои данные</button>

  <div className="container flex-column d-flex flex-wrap py-5 justify-content-center text-white">
    <div className="d-flex flex-column">

      <h3>Имя пользователя: {editStatus ? 
      <input className="form-control form-control-lg" ref={inputName} type="text" defaultValue={user.user_name} aria-label=".form-control-lg example" /> : 
      <span className="badge badge-secondary">{user.user_name}</span>} </h3>

      <h3>E-mail: {editStatus ? 
      <input className="form-control form-control-lg" ref={inputEmail} type="text" defaultValue={user.user_email} aria-label=".form-control-lg example" /> :
      <span className="badge badge-secondary">{user.user_email}</span>}</h3>

      <h3>Дата регистрации: <span className="badge badge-secondary">{user.createdAt}</span></h3>
      <h3>Очки: <span className="badge badge-secondary">{user.user_score}</span></h3>
    </div>

    <div className="container" style={{ color: "black" }}>
     {message}
    </div>

  </div>
</>
);
}

export default Profile;
