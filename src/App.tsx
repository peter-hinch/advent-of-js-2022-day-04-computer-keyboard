import React, { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";

interface Key {
  code: string;
  text: string;
  classes?: string | undefined;
  isJiggling?: boolean | undefined;
}
interface Row {
  row: Key[];
  targetCode: string;
}

const keys = [
  [
    { code: `Backquote`, text: "`" },
    { code: "Digit1", text: "1" },
    { code: "Digit2", text: "2" },
    { code: "Digit3", text: "3" },
    { code: "Digit4", text: "4" },
    { code: "Digit5", text: "5" },
    { code: "Digit6", text: "6" },
    { code: "Digit7", text: "7" },
    { code: "Digit8", text: "8" },
    { code: "Digit9", text: "9" },
    { code: "Digit0", text: "0" },
    { code: "Minus", text: "-" },
    { code: "Equal", text: "=" },
    { code: "Backspace", text: "DEL", classes: "key__special key__del" },
  ],
  [
    { code: "Tab", text: "TAB", classes: "key__special key__tab" },
    { code: "KeyQ", text: "Q" },
    { code: "KeyW", text: "W" },
    { code: "KeyE", text: "E" },
    { code: "KeyR", text: "R" },
    { code: "KeyT", text: "T" },
    { code: "KeyY", text: "Y" },
    { code: "KeyU", text: "U" },
    { code: "KeyI", text: "I" },
    { code: "KeyO", text: "O" },
    { code: "KeyP", text: "P" },
    { code: "BracketLeft", text: "[" },
    { code: "BracketRight", text: "]" },
    { code: "Backslash", text: "\\" },
  ],
  [
    { code: "CapsLock", text: "CAPS", classes: "key__special key__caps" },
    { code: "KeyA", text: "A" },
    { code: "KeyS", text: "S" },
    { code: "KeyD", text: "D" },
    { code: "KeyF", text: "F" },
    { code: "KeyG", text: "G" },
    { code: "KeyH", text: "H" },
    { code: "KeyJ", text: "J" },
    { code: "KeyK", text: "K" },
    { code: "KeyL", text: "L" },
    { code: "Semicolon", text: ";" },
    { code: "Quote", text: `'` },
    { code: "Enter", text: "ENTER", classes: "key__special key__enter" },
  ],
  [
    { code: "ShiftLeft", text: "SHIFT", classes: "key__special key__shift" },
    { code: "KeyZ", text: "Z" },
    { code: "KeyX", text: "X" },
    { code: "KeyC", text: "C" },
    { code: "KeyV", text: "V" },
    { code: "KeyB", text: "B" },
    { code: "KeyN", text: "N" },
    { code: "KeyM", text: "M" },
    { code: "Comma", text: "," },
    { code: "Period", text: "." },
    { code: "Slash", text: "/" },
    { code: "ShiftRight", text: "SHIFT", classes: "key__special key__shift" },
  ],
];

const getNextCode = () => {
  const codes = keys.flat(1).map((key) => key.code);
  return codes[Math.floor(Math.random() * codes.length)];
};

const App = () => {
  const gameLength = 60;
  const defaultFeedback = "Eyes on the screen";

  const [targetCode, setTargetCode] = useState<string>("");
  const [feedbackMessage, setFeedbackMessage] =
    useState<string>(defaultFeedback);
  const [correctKeyCount, setCorrectKeyCount] = useState<number>(0);
  const [missedKeyCount, setMissedKeyCount] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(gameLength);

  useEffect(() => {
    if (targetCode === "") {
      setTargetCode(getNextCode());
    }
  }, []);

  // Add an event listener to handle key presses anywhere on the page
  // Reference: https://stackoverflow.com/questions/61740073/how-to-detect-keydown-anywhere-on-page-in-a-react-app
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!timerRunning) {
      setTimeRemaining(gameLength);
      setCorrectKeyCount(0);
      setMissedKeyCount(0);
      setFeedbackMessage(defaultFeedback);
      setTimerRunning(true);
    }
    if (event?.code === targetCode) {
      setCorrectKeyCount((prev) => prev + 1);
      setTargetCode(getNextCode());
    } else {
      setMissedKeyCount((prev) => prev + 1);
      setTargetCode(getNextCode());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [targetCode, timerRunning]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    }
    if (timeRemaining <= 0) {
      setTimerRunning(false);
      setFeedbackMessage(
        `Time's up! You typed ${correctKeyCount} correct keys, and missed ${missedKeyCount}. Press the jiggling key to try again.`
      );
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeRemaining]);

  return (
    <section id="keyboard">
      <div className="keyboard__feedback">
        {feedbackMessage}{" "}
        {timerRunning && timeRemaining && `- ${timeRemaining} seconds to go`}
      </div>
      <div className="keyboard__container">
        {keys.map((row, index) => (
          <KeyboardRow
            key={`keyboard-row-${index}`}
            row={row}
            targetCode={targetCode}
          />
        ))}
      </div>
    </section>
  );
};

const KeyboardRow: React.FC<Row & { targetCode: string }> = ({
  row,
  targetCode,
}) => {
  return (
    <div className="keyboard__row">
      {row.map((key) => (
        <KeyboardKey
          key={`key-${key.code}`}
          code={key.code}
          text={key.text}
          classes={key.classes}
          isJiggling={targetCode === key.code}
        />
      ))}
    </div>
  );
};

const KeyboardKey: React.FC<Key> = ({ code, text, classes, isJiggling }) => {
  return (
    <button
      id={`key-${code}`}
      className={`keyboard__key ${classes} ${isJiggling && "key__jiggling"}`}
    >
      {text}
    </button>
  );
};

export default App;
