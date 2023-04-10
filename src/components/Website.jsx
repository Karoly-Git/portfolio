import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import GetInTouch from './Section_Get_In_Touch'
import '../css/website.css'
import { languages } from '../js/languages'

export default function Website() {

    const [currentLanguage, setCurrentLanguage] = useState('eng');

    const [isFormDisplayed, setIsFormDisplayed] = useState(false)

    function showForm() {
        setIsFormDisplayed(true)
    }
    function hideForm() {
        setIsFormDisplayed(false)
    }

    function changeCurrentLanguage(lang) {
        setCurrentLanguage(lang);
        console.log(currentLanguage);
    }

    return (
        <Router>
            <header></header>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home
                                isFormDisplayed={isFormDisplayed}
                                showForm={showForm}
                                hideForm={hideForm}
                                languages={languages}
                                currentLanguage={currentLanguage}
                                changeCurrentLanguage={changeCurrentLanguage}
                            />
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <h1>Page not found</h1>
                        }
                    />
                </Routes>
            </main>
            <footer>
                <GetInTouch
                    showForm={showForm}
                    languages={languages}
                    currentLanguage={currentLanguage}
                />
            </footer>
        </Router>
    )
}