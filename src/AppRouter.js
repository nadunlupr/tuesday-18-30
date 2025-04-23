import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import LessonDetails from './components/lesson/LessonDetails';
import Functional from './components/functional-components/Functional'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/lesson' element={<LessonDetails />} />
                    <Route path='/functional' element={<Functional />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;