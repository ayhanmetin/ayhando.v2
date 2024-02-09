import React from 'react';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
      <div className='bg-dark'>
        <div className='container d-flex flex-column flex-sm-row justify-content-between pt-4 mb-3 border-top fs-6'>
          <p style={{ color: 'white' }}>
            All prices include VAT and the manufacturer’s recommended retail
            price.{' '}
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
