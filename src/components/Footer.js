import React from 'react';
import github from './images/github-icon.png'
import linkedin from './images/linkedin-icon.png'
import youtube from './images/youtube-icon.png'

const style = {
    maxWidth: '50px'
}
export default function Footer() {
    return (
        <footer className="footer bg-dark mt-auto py-4">
            <div className="d-flex justify-content-center py-2">
                <a className = "mx-2" href="htts://www.github.com/rpgarde">
                    <img src={github} alt="github" style={style} />
                </a>
                <a className = "mx-2" href="htts://www.linkedin.com/in/paologarde">
                    <img src={linkedin} alt="linkedin" style={style} />
                </a>
                <a className = "mx-2" href="htts://www.youtube.com/pgblanks">
                    <img src={youtube} alt="youtube" style={style} />
                </a>
            </div>
            <div className="container d-flex justify-content-center">
                <span className="text-muted">&copy; Paolo Garde, 2021</span>
            </div>
        </footer>
    )
}