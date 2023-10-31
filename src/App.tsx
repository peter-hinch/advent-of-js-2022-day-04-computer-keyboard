import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './App.css';

function App() {
  const [correctKeyCount, setCorrectKeyCount] = useState<number>();
  const [missedKeyCount, setMissedKeyCount] = useState<number>();
  const [timeRemaining, setTimeRemaining] = useState<number>();

  // Add an event listener to handle key presses anywhere on the page
  // Reference: https://stackoverflow.com/questions/61740073/how-to-detect-keydown-anywhere-on-page-in-a-react-app
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log(event);
  };

  return (
    <section id="keyboard">
      <div className="keyboard__container">
        <div className="keyboard__row">
          <button id="192" className="keyboard__key">
            `
          </button>
          <button id="49" className="keyboard__key">
            1
          </button>
          <button id="50" className="keyboard__key">
            2
          </button>
          <button id="51" className="keyboard__key">
            3
          </button>
          <button id="52" className="keyboard__key">
            4
          </button>
          <button id="53" className="keyboard__key">
            5
          </button>
          <button id="54" className="keyboard__key">
            6
          </button>
          <button id="55" className="keyboard__key">
            7
          </button>
          <button id="56" className="keyboard__key">
            8
          </button>
          <button id="57" className="keyboard__key">
            9
          </button>
          <button id="96" className="keyboard__key">
            0
          </button>
          <button id="173" className="keyboard__key">
            -
          </button>
          <button id="61" className="keyboard__key">
            =
          </button>
          <button id="46" className="keyboard__key key__special key__del">
            DEL
          </button>
        </div>
        <div className="keyboard__row">
          <button className="keyboard__key key__special key__tab">TAB</button>
          <button id="81" className="keyboard__key">
            Q
          </button>
          <button id="87" className="keyboard__key">
            W
          </button>
          <button id="69" className="keyboard__key">
            E
          </button>
          <button id="82" className="keyboard__key">
            R
          </button>
          <button id="84" className="keyboard__key">
            T
          </button>
          <button id="89" className="keyboard__key">
            Y
          </button>
          <button id="85" className="keyboard__key">
            U
          </button>
          <button id="73" className="keyboard__key">
            I
          </button>
          <button id="79" className="keyboard__key">
            O
          </button>
          <button id="80" className="keyboard__key">
            P
          </button>
          <button id="219" className="keyboard__key">{`[`}</button>
          <button id="221" className="keyboard__key">{`]`}</button>
          <button id="220" className="keyboard__key">
            \
          </button>
        </div>
        <div className="keyboard__row">
          <button id="20" className="keyboard__key key__special key__caps">
            CAPS
          </button>
          <button id="65" className="keyboard__key">
            A
          </button>
          <button id="83" className="keyboard__key">
            S
          </button>
          <button id="68" className="keyboard__key">
            D
          </button>
          <button id="70" className="keyboard__key">
            F
          </button>
          <button id="71" className="keyboard__key">
            G
          </button>
          <button id="72" className="keyboard__key">
            H
          </button>
          <button id="74" className="keyboard__key">
            J
          </button>
          <button id="75" className="keyboard__key">
            K
          </button>
          <button id="76" className="keyboard__key">
            L
          </button>
          <button id="59" className="keyboard__key">
            ;
          </button>
          <button id="222" className="keyboard__key">
            '
          </button>
          <button id="13" className="keyboard__key key__special key__enter">
            ENTER
          </button>
        </div>
        <div className="keyboard__row">
          <button id="16" className="keyboard__key key__special key__shift">
            SHIFT
          </button>
          <button id="90" className="keyboard__key">
            Z
          </button>
          <button id="88" className="keyboard__key">
            X
          </button>
          <button id="67" className="keyboard__key">
            C
          </button>
          <button id="86" className="keyboard__key">
            V
          </button>
          <button id="66" className="keyboard__key">
            B
          </button>
          <button id="78" className="keyboard__key">
            N
          </button>
          <button id="77" className="keyboard__key">
            M
          </button>
          <button id="188" className="keyboard__key">
            ,
          </button>
          <button id="190" className="keyboard__key">
            .
          </button>
          <button id="191" className="keyboard__key">
            /
          </button>
          <button id="16" className="keyboard__key key__special key__shift">
            SHIFT
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
