import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error500 from "./component/Error500";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/guestbook' element={<Guestbook />} />
                <Route path='*' element={<Error500 />} />
            </Routes>
        </Router>
    );
}