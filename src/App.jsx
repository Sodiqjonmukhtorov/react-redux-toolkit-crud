import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = React.lazy(() => import('./Home'));
const Create = React.lazy(() => import('./Create'));
const Update = React.lazy(() => import('./Update'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Yuklanmoqda...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Update />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
