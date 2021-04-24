import React from 'react';
import Main from './Main'
import Alert from './Alert/Alert'
import { AlertProvider } from './Alert/AlertContext'

const UseContext = () => {
    return (
        <AlertProvider>
            <Main />
            <Alert />
        </AlertProvider>
    );
};

export default UseContext;