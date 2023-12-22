import React from 'react';

interface Props {
  value: number;
}

const Ball: React.FC<Props> = ({ value }) => {
  const colors = ['blue', 'red', 'green', 'yellow', 'black'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`ball ${randomColor}`}>
      <span className='ballNum'>{value}</span>
    </div>
  );
};

export default Ball;
