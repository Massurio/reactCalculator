import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

import calcButtons from './buttons.json';

const App = () => {
  const [sum, setSum] = useState([0]);
  const [error, setError] = useState({ isError: false, message: '' });

  const handleButton = (val) => {
    try {
      setError({ isError: false, message: '' });

      if (val === undefined) {
        throw new Error('Button is not defined');
      } else if (val === 'clear') {
        setSum([0]);
      } else if (val === '=') {
        let joinedSum = sum.join('');
        let newSum = evaluate(joinedSum);
        setSum([newSum]);
      } else {
        let storedSum = [...sum, val];
        if (storedSum[0] === 0) {
          storedSum.shift();
        }
        setSum(storedSum);
      }
    } catch (err) {
      setError({ isError: true, message: err });
      setSum([0]);
    }
  };

  return (
    <div className="App">
      <h1>Mass Calculator</h1>
      {error.isError && (
        <div className="errorMsg">Oops, you can't do that. Try again!</div>
      )}
      <div className="calcWrapper">
        <div className="screen">{sum}</div>
        <div className="buttons">
          {calcButtons.map((item, index) => (
            <button
              className={`btn ${item.style}`}
              key={index}
              onClick={() => handleButton(item.val)}
            >
              {item.alias ? item.alias : item.val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
