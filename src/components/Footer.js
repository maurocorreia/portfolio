import React from 'react';

export default function Footer() {
    return (
        <footer>
            <section className='project-div'>
                <h1> PROJECTS </h1>
                <div className='project-wrap'>
                    <img src='https://i.imgur.com/fAroGHk.png' />
                    <img src='https://i.imgur.com/fAroGHk.png' />
                    <img src='https://i.imgur.com/fAroGHk.png' />
                    <img src='https://i.imgur.com/fAroGHk.png' />
                </div>
            </section>

            <section className='connect-div'>
                <h1> Let's connect! </h1>
                <ul className='connect-wrap'>
                    <li>Github</li>
                    <li>Linkedin</li>
                </ul>
            </section>
        </footer>
    )
}