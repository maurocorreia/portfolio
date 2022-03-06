import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='text-container'>
                <h5>HELLO, I'M</h5>
                <span> mauro.</span>
                <h4> FRONT END DEVELOPER</h4>
                <a class="button" href="src\querys\cv.pdf" download="CV.pdf"> DOWNLOAD CV</a>
            </div>
        </header>
    )
}