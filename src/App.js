import React from "react";
import Particles from "react-particles-js";
import logo from "./assets/maptv.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light'
        style={{ backgroundColor: "white" }}
      >
        <div className='container'>
          <a className='navbar-brand' href='#!'>
            <img
              src={logo}
              alt=''
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            MAP TV
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#!'>
                  Tentang Map Tv <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='button btn btn-info' href='#!'>
                  Donasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container'>
        <h1 style={{ textAlign: "center", color: "white" }}>
          MAP TV Live Stream
        </h1>
      </div>

      <div className='embed-responsive embed-responsive-4by3 container video'>
        <iframe
          className='embed-responsive-item '
          title='streaming maptv'
          src='https://cdn.siar.us/player/?link=re1.siar.us/maptv/live'
          allowFullScreen
        />
      </div>
      <div className='container footer'>
        <p>© 2020 MAP TV Live Stream. All rights reserved</p>
      </div>
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </div>
  );
};

export default App;
