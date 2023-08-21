import React from 'react';
import './Navbar.scss';
import logo from '../../Assets/images/logo.svg';
import { SimpleBtn } from '../Buttons/Buttons';

function Navbar() {
  return (
    <section className="nav">
      <div className="inner-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sign-in">
          <SimpleBtn title="Sign In" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
