import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListOfUsers from './components/ListOfUsers';
import Users from './components/Users';

ReactDOM.render(
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<ListOfUsers />} >

                <Route path="/users/:id" element={<Users />} />

            </Route>

            <Route path="*" element={<div>Error</div>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
