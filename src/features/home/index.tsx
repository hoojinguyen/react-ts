import React from 'react';
import { useHistory } from 'react-router-dom';
import { randomNumber } from '../../utils';

const Home: React.FC = () => {
  const history = useHistory();

  const productId = randomNumber();
  return (
    <div className="row home">
      <div className="container">
        <h1>This is homepage</h1>
        <button onClick={() => history.push(`/product/${productId}`)}>
          go to product
        </button>
      </div>
    </div>
  );
};

export default Home;
