import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div className="row category">
      <div className="container">
        <h1>This is category</h1>
        <button onClick={() => history.push('/home')}>go to home</button>
      </div>
    </div>
  );
};

export default Home;
