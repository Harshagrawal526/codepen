import React, { useState } from 'react'
import App from '../App';
import Home from './Home';

function Main() {

    const [showHomePage, setShowHomePage] = useState(true);

    const togglePage = () => {
        setShowHomePage(!showHomePage);
    };

    return (
        <div>
            {showHomePage ? <Home val={showHomePage} fun = {togglePage}/> : <App val={showHomePage} fun = {togglePage}/>}
        </div>
    );
}

export default Main