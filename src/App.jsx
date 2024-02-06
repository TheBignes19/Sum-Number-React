import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');
  const [result, setResult] = useState('');

  const addNumber = () => {
    const numberEntered = parseFloat(currentNumber);

    if (!isNaN(numberEntered)) {
      setNumbers([...numbers, numberEntered]);
      setCurrentNumber('');
    }
  };

  const calcSum = () => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    setResult(`= ${sum}`);
  };

  const clearNumbers = () => {
    setNumbers([]);
    setCurrentNumber('');
    setResult('');
  };

  return (
    <>
      <div className='container'>
        <div>
          <div className='main'>
            <input
              type="number"
              placeholder='Type number'
              value={currentNumber}
              onChange={(e) => setCurrentNumber(e.target.value)}
            />
            <button className='add' onClick={addNumber}>+</button>
            <button className='calc' onClick={calcSum}>Calcular</button>
          </div>
          <div className='content'>
            <span>
              {numbers.map((number, index) => (
                <span key={index}>
                  {index > 0 ? ' + ' : ''}
                  {number}
                </span>
              ))}
              {result}
            </span>
            <button className='clean' onClick={clearNumbers}>Limpar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
