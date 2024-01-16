import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="page-header-wrapper">
          <div className="home-section">
            <a className="link" href="/">
              bono-log
            </a>
          </div>
          <div className="category-section">
            <a className="link" href="/">
              about
            </a>
            <a className="link" href="/">
              pages
            </a>
          </div>
        </div>
      </header>
      <body>
        <div className="content-wrapper">
          <p>Hello, Bono-log!</p>
        </div>
      </body>
      <footer>
        <div className="footer-wrapper">
          <p>copyright</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
