import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer2() {
  return (
    <>
      <div className='bg-dark'>
        <div className='container d-flex flex-column flex-sm-row justify-content-between pt-4 mb-3fs-6'>
          <p>
            {' '}
            <a
              target='_blank'
              className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
              href='https://github.com/ayhanmetin/ayhando.v2'
            >
              GitHub Repository
            </a>
          </p>
          <ul className='list-unstyled d-flex'>
            <p className='text-white fs-6'>You can also find me on</p>
            <li className='ms-3'>
              <a
                href='https://www.linkedin.com/in/ayhanmet'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: '1.5rem' }}
                />
              </a>
            </li>
            <li className='ms-3'>
              <a
                href='https://www.github.com/ayhanmetin'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: '1.5rem' }}
                />
              </a>
            </li>
            <li className='ms-3'>
              <a
                href='mailto:ayhanmetinde@gmail.com'
                aria-label='Email'
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: '1.5rem' }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
