import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectDetails from './Page_Project_Details'
import GetInTouch from './Section_Get_In_Touch'
import '../css/website.css'
import { languages } from '../js/languages'

export default function Website() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [currentLanguage, setCurrentLanguage] = useState('eng');

    const [isFormDisplayed, setIsFormDisplayed] = useState(false);

    function switchDarkModeOnOff(mode) {
        if (mode === 'on') {
            setIsDarkMode(true);
        }
        if (mode === 'off') {
            setIsDarkMode(false);
        }
    }

    function changeCurrentLanguage(lang) {
        setCurrentLanguage(lang);
        console.log(currentLanguage);
    }

    function showForm() {
        setIsFormDisplayed(true)
    }

    function hideForm() {
        setIsFormDisplayed(false)
    }

    return (
        <Router>
            <div className={`${isDarkMode ? 'dark-mode' : ''}`}>
                <main>
                    <Routes>
                        <Route
                            //path='/portfolio'
                            path=''
                            element={
                                <Home
                                    isDarkMode={isDarkMode}
                                    switchDarkModeOnOff={switchDarkModeOnOff}
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
                        <Route
                            path='/project-details'
                            element={
                                <ProjectDetails />
                            }
                        />
                    </Routes>
                </main>
                {!false && <footer>
                    <GetInTouch
                        isDarkMode={isDarkMode}
                        showForm={showForm}
                        languages={languages}
                        currentLanguage={currentLanguage}
                    />
                </footer>}
            </div>
        </Router>
    )
}