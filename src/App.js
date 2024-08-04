import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const newValue = e.target.value;
    const lastChar = value.slice(-1);

    if (newValue === '.') {
    
      if (value.includes('.') && value.split(/[-+*/]/).pop().includes('.')) return;
      setValue(value + newValue);
    } else if (['+', '-', '*', '/'].includes(newValue)) {
      
      if (!['+', '-', '*', '/'].includes(lastChar)) {
        setValue(value + newValue);
      }
    } else {
      setValue(value + newValue);
    }
  };

  const handleEqualClick = () => {
    try {
   
      const result = eval(value);
      setValue(result.toString());
    } catch {
      setValue('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleButtonClick} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="=" className="equal" onClick={handleEqualClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
