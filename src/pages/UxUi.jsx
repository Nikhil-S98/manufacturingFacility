import React from 'react';
import { Link } from 'react-router-dom';

const UxUi = () => (
  <div className="uxui-container">
    <h1>ux/ui.</h1>
    <p>This is the UX/UI section. Here you can showcase your design projects.</p>
    <div style={{ marginTop: '2rem' }}>
      <h3>Projects:</h3>
      <ul>
        <li>
          <Link to="/ux-ui/pocket-session" className="home-link">
            PocketSession
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default UxUi; 