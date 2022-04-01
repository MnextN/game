import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Error404 from '../Error404/Error404';
import GameArea from "../GameArea/GameArea";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<GameArea />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
