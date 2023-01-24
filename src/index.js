import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/HelveticaNeue.ttc'
import SelectedTeamContextProvider from './SelectedTeamContext/SelectedTeamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SelectedTeamContextProvider>
        <App />
    </SelectedTeamContextProvider>
);