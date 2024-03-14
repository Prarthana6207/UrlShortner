import * as React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
// import Form from './component/Form/form';
import Container from "./component/Container/container";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Auth/Home";
import Login from "./component/Auth/login";
import Register from "./component/Auth/singup";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
