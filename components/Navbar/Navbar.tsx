import React from 'react';
import Section from '@components/Section/Section';
import Button from '@components/Button/Button';

const Navbar = () => {
  return (
    <nav id='header' className='navbar'>
      <div className='container'>
        <a className='navbar-brand' href='#contact'>
          Fernando Cordero
        </a>

        {/* <button className='navbar-toggler'>
          <span className='navbar-toggler-icon'></span>
        </button> */}
        <div className='collapse-navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Section
                className={'nav-link'}
                href={'#home'}
                text={'Home'}
                isSpan={false}
              />
            </li>
            <li className='nav-item'>
              <Section
                className={'nav-link'}
                href={'#about'}
                text={'About'}
                isSpan={true}
              />
            </li>
            <li className='nav-item'>
              <Section
                className={'nav-link'}
                href={'#projects'}
                text={'Projects'}
                isSpan={true}
              />
            </li>
            <li className='nav-item'>
              <Button
                className={'nav-button .btn-info'}
                href={'#contact'}
                text={'Contact'}
              />
            </li>
            <li className='nav-item'>
              <Section
                className={'nav-link'}
                href={'#login'}
                text={'Login'}
                isSpan={true}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
