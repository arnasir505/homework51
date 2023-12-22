import { useState } from 'react';
import './App.css';
import Ball from './components/Ball';

function App() {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const balls = numbers.map((num) => <Ball value={num} />);

  const shuffle = () => {
    const max = 36;
    const min = 5;
    let newNumbers: number[] = [];

    for (let i = 0; i < 5; i++) {
      const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
      newNumbers.push(randomInt);
    }

    newNumbers.sort((a, b) => a - b);
    newNumbers = [...new Set(newNumbers)];
    
    if (newNumbers.length < 5) {
      shuffle();
    } else {
      setNumbers(newNumbers);
    }
  };

  return (
    <>
      <div className='ballsWrap'>{balls}</div>
      <button onClick={shuffle}>Shuffle</button>
    </>
  );
}

export default App;
