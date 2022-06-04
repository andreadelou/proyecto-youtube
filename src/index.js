
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header.jsx';

const App = () =>{
    return(
        <>
            <Header title ="test"/>
                
        </>
    )

}

const root = ReactDOMClient.createRoot(
    document.getElementById('app')
);

root.render(
    <App />
)
