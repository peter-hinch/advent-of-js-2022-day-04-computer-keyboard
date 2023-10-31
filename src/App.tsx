import React from 'react';

import './App.css';

function App() {
  return (
    <section id="keyboard">
      <div className="keyboard__container">
        <div className="keyboard__row">
          <button className="keyboard__key">`</button>
          <button className="keyboard__key">1</button>
          <button className="keyboard__key">2</button>
          <button className="keyboard__key">3</button>
          <button className="keyboard__key">4</button>
          <button className="keyboard__key">5</button>
          <button className="keyboard__key">6</button>
          <button className="keyboard__key">7</button>
          <button className="keyboard__key">8</button>
          <button className="keyboard__key">9</button>
          <button className="keyboard__key">0</button>
          <button className="keyboard__key">-</button>
          <button className="keyboard__key">=</button>
          <button className="keyboard__key key__special key__del">DEL</button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key key__special key__tab">TAB</button>
          <button className="keyboard__key">Q</button>
          <button className="keyboard__key">W</button>
          <button className="keyboard__key">E</button>
          <button className="keyboard__key">R</button>
          <button className="keyboard__key">T</button>
          <button className="keyboard__key">Y</button>
          <button className="keyboard__key">U</button>
          <button className="keyboard__key">I</button>
          <button className="keyboard__key">O</button>
          <button className="keyboard__key">P</button>
          <button className="keyboard__key">[</button>
          <button className="keyboard__key">]</button>
          <button className="keyboard__key">\</button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key key__special key__caps">CAPS</button>
          <button className="keyboard__key">A</button>
          <button className="keyboard__key">S</button>
          <button className="keyboard__key">D</button>
          <button className="keyboard__key">F</button>
          <button className="keyboard__key">G</button>
          <button className="keyboard__key">H</button>
          <button className="keyboard__key">J</button>
          <button className="keyboard__key">K</button>
          <button className="keyboard__key">L</button>
          <button className="keyboard__key">;</button>
          <button className="keyboard__key">'</button>
          <button className="keyboard__key key__special key__enter">
            ENTER
          </button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key key__special key__shift">
            SHIFT
          </button>
          <button className="keyboard__key">Z</button>
          <button className="keyboard__key">X</button>
          <button className="keyboard__key">C</button>
          <button className="keyboard__key">V</button>
          <button className="keyboard__key">B</button>
          <button className="keyboard__key">N</button>
          <button className="keyboard__key">M</button>
          <button className="keyboard__key">,</button>
          <button className="keyboard__key">.</button>
          <button className="keyboard__key">/</button>
          <button className="keyboard__key key__special key__shift">
            SHIFT
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
