import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './App.css';

function App() {
  const [correctKeyCount, setCorrectKeyCount] = useState<number>();
  const [missedKeyCount, setMissedKeyCount] = useState<number>();
  const [timeRemaining, setTimeRemaining] = useState<number>();

  // Add an event listener to handle a key press anywhere on the page
  // Reference: https://stackoverflow.com/questions/61740073/how-to-detect-keydown-anywhere-on-page-in-a-react-app
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (event: any) => {
    console.log(event);
  };

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
          <button className="keyboard__key">{`[`}</button>
          <button className="keyboard__key">{`]`}</button>
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
