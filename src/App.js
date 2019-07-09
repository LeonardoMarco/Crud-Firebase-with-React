import React from 'react';
import Routes from './services/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <>
        <ToastContainer />
        <Routes />
    </>
)

export default App;
