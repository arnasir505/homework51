import React from 'react';

interface Props {
  value: number;
}

const Ball: React.FC<Props> = ({ value }) => {
  return (
    <div className='ball'>
      <span className='ballNum'>{value}</span>
    </div>
  );
};

export default Ball;
