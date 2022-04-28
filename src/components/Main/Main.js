import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FadeIn from './FadeIn/FadeIn';

function Main(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div>default component goes here</div>} />
                <Route path='fadein' element={<FadeIn />} />
                <Route
                path="*"
                element={
                <div>
                    <p>404 component here</p>
                </div>
                }/>
            </Routes>
        </div>
    );
}

export default Main;