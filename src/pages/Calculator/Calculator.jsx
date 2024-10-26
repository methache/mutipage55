import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const formatNumberWithComma = (num) => {
    if (!num) return '';
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const removeComma = (num) => {
    return num.replace(/,/g, '');
  };

  const handleClick = (value) => {
    setInput((prev) => {
      const newValue = isCalculated ? value : removeComma(prev) + value;
      setIsCalculated(false);
      return formatNumberWithComma(newValue);
    });
    setResult('');
  };

  const clearInput = () => {
    setInput('');
    setResult('');
    setIsCalculated(false);
  };

  const deleteLast = () => {
    setInput((prev) => formatNumberWithComma(removeComma(prev).slice(0, -1)));
  };

  const toggleSign = () => {
    setInput((prev) => {
      const rawValue = removeComma(prev);
      const newValue = rawValue.charAt(0) === '-' ? rawValue.slice(1) : '-' + rawValue;
      return formatNumberWithComma(newValue);
    });
  };

  const calculatePercentage = () => {
    setInput((prev) => {
      const rawValue = removeComma(prev);
      const percentage = parseFloat(rawValue) / 100;
      return formatNumberWithComma(percentage.toString());
    });
  };

  const calculateResult = () => {
    try {
      const rawInput = removeComma(input);
      const sanitizedInput = rawInput.replace(/[^-()\d/*+.]/g, '');
      const evalResult = Function(`"use strict"; return (${sanitizedInput})`)();
      const formattedResult = formatNumberWithComma(evalResult.toFixed(2).toString());
      setResult(formattedResult);
      setInput(formattedResult);
      setIsCalculated(true);
    } catch (error) {
      setResult('Error');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (!isNaN(key) || key === '.') {
        handleClick(key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleClick(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        deleteLast();
      } else if (key === 'Escape') {
        clearInput();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className='calculator-container'>
      <h1>Calculator</h1>
      <div className='calculator-display'>
        <input
          type='text'
          value={input}
          disabled
          aria-label="Calculator input"
        />
        <h2>{result}</h2>
      </div>
      <div className='calculator-buttons'>
        <button className='c' onClick={clearInput}>C</button>
        <button onClick={toggleSign}>+/-</button>
        <button className='btn btn-danger' onClick={deleteLast}>DEL</button>
        <button className='btn btn-warning' onClick={calculatePercentage}>%</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className='btn btn-warning' onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className='btn btn-warning' onClick={() => handleClick('*')}>X</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className='btn btn-warning' onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('00')}>00</button> {/* ปุ่ม 00 เพิ่มที่นี่ */}
        <button onClick={() => handleClick('.')}>.</button>
        <button className='equal-button' onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
