import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import countapi from 'countapi-js';

export default function Footer() {
  const [countVisits, setCountVisits] = useState(0);

  useEffect(() => {
    countapi.visits('global').then((result) => {
      setCountVisits(result.value);
    });
  }, []);

  return (
    <footer className="footer background-blue mt-auto py-4 border-top-bold">
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
        <span className="text-light">&copy; Paolo Garde, 2022</span>
      </div>
      <div className="container d-flex justify-content-center">
        <span className="text-light">Oh hey, you&apos;re visitor number {countVisits}</span>
      </div>
    </footer>
  );
}
