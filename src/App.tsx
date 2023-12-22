import { useState } from 'react';
import './App.css';
import Ball from './components/Ball';

function App() {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const balls = numbers.map((num) => <Ball value={num} key={num} />);

  return (
    <>
      <div className='ballsWrap'>{balls}</div>
      <button>Shuffle</button>
    </>
  );
}

export default App;
