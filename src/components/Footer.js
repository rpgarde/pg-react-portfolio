import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer bg-dark mt-auto py-4">
      <div className="d-flex justify-content-center py-2">
        <a className="mx-2 footerlink" href="https://www.github.com/rpgarde">
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </a>
        <a className="mx-2 footerlink" href="https://www.linkedin.com/in/paologarde">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a className="mx-2 footerlink" href="https://www.youtube.com/pgblanks">
          <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
        </a>
      </div>
      <div className="container d-flex justify-content-center">
        <span className="text-muted">&copy; Paolo Garde, 2022</span>
      </div>
    </footer>
  );
}
